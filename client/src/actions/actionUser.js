import axios from "axios";
import { firebase, googleAuthProvider } from "../firebase";

export const  LOGIN_GOOGLE = "LOGIN_GOOGLE";
export const LOCAL_LOGIN_USER = "LOCAL_LOGIN_USER";

// .auth().signInWithPopup(googleAuthProvider).then(data => console.log(data))

export const googleLogin = () => {
  return async (dispatch) => {
    try {
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
         console.log(response, "este es el repsonse")
         response.status === 200 ?
            dispatch({
           type: "LOGIN_GOOGLE",
           payload:{ username:response.data.username, admin:response.data.admin, id:response.data.id },
         })
         : response.status === 202 ? 
         dispatch({
          type: "LOGIN_GOOGLE",
          payload:{ username:userAuthGoogle.username, admin:userAuthGoogle.admin, },
        })
         : console.log("este cosole.log no deberia parecer")
         
      } catch (error) {
        console.log("msg: algo a salido muy mal x.x")
      }
   };
}; // esta es la accion de la autenticacion con google 

export const localLoginUser = (datos) => {
  return async (dispatch) => {
    const { data } = await axios.post("/user/login", datos )
    dispatch({
      type: LOCAL_LOGIN_USER,
      payload: data,
    })
  }
};

