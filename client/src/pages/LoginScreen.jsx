import React from 'react';
import GoogleButton from "react-google-button";
import { googleLogin  } from "../actions/actionUser"
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };
  
  return <div>
   <GoogleButton onClick={handleGoogleLogin} />
  </div>;
};

export default LoginScreen;
