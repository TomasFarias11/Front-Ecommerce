import { firebase, googleAuthProvider } from "../firebase";
// .auth().signInWithPopup(googleAuthProvider).then(data => console.log(data))
export const googleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(( dataUser ) => {
          console.log(dataUser)
        // dispatch(login(dataUser.uid, dataUser.displayName));
      });
  };
};