import axios from "axios";
import { firebase, googleAuthProvider } from "../firebase";
import swal from 'sweetalert';
// import {useNavigate} from 'react-router-dom'

export const  LOGIN_GOOGLE = "LOGIN_GOOGLE";
export const LOCAL_LOGIN_USER = "LOCAL_LOGIN_USER";
export const GET_USER_ID = "GET_USER_ID";
export const EDIT_USER = "EDIT_USER";

// .auth().signInWithPopup(googleAuthProvider).then(data => console.log(data))

export const googleLogin = () => {

  return async (dispatch) => {
    try {
      // console.log('algooooooooo')
   const dataUser = await firebase.auth().signInWithPopup(googleAuthProvider)
          const userAuthGoogle =
             {
              username: dataUser.user.displayName,
              email: dataUser.user.email,  
              name: dataUser.additionalUserInfo.profile.given_name, 
               lastName: dataUser.additionalUserInfo.profile.family_name, 
               address: "null", 
              image: dataUser.additionalUserInfo.profile.picture,  
              admin: false,  
               password: dataUser.user.uid,
               loginWithGoogle: true,
            }
            
         let response = await axios.post('/user', userAuthGoogle )
        //  console.log(response, "este es el repsonse")
         response.status === 200 ?
            dispatch({
              type: "LOGIN_GOOGLE",
              payload:{ username:response.data.username, admin:response.data.admin, id:response.data.id },
            },
            window.localStorage.setItem('usuario', JSON.stringify(response.data)))
            : response.status === 202 ? 
               response.data.banned === false ?
            dispatch({
              type: "LOGIN_GOOGLE",
              payload:{ username:response.data.username, admin:response.data.admin, id:response.data.id },
            }, window.localStorage.setItem('usuario', JSON.stringify(response.data)))
               : swal("este usuario esta baniado tempralmente puede comunicarte con nuestro equipo si quieres!", {
                buttons: false,
                icon: 'error',
                timer: 3000,
              })
            : console.log("este cosole.log no deberia aparecer")
         
      } catch (error) {
        console.log(error)
      }
   };
}; // esta es la accion de la autenticacion con google 

export const localLoginUser = (datos) => {
 
  return async (dispatch) => {
    try {
    const { data } = await axios.post("/user/login", datos )
    console.log(data, "esta es la data ") 
     data.banned === true ?
     swal("este usuario se encuentra baniado temporalmente para mas informacion puedes estarte comunicando cun nuestro equipo!", {
      buttons: false,
      icon: 'error',
      timer: 5000,
    }):
    dispatch({
      type: LOCAL_LOGIN_USER,
      payload: data,
    },
    window.localStorage.setItem('usuario', JSON.stringify(data)))
 
  }catch (error) {
  //  console.log(error, "la concha de tu hermana")
     swal("el usuario esta mal escrito o tu password es incorrecto ;( !", {
      buttons: false,
      icon: 'error',
      timer: 3000,
    });
  } 
}
};

export const getUserId = (idUser) => {
  return async (dispatch) => {
    const user = await axios.get(`/user/${idUser}`)
    dispatch({
      type: GET_USER_ID,
      payload: user.data
    })
  }
}

export const editUser = (idUser, payload) => {
  return async (dispatch) => {
    const user = await axios.put(`/user/${idUser}`, payload)
    dispatch({
      type: EDIT_USER,
      payload: user.data
    })
  }
}