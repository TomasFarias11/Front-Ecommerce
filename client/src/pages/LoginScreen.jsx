import React from 'react';
import GoogleButton from "react-google-button";
// import {Link} from "react-router-dom"
import { googleLogin, localLoginUser  } from "../actions/actionUser"
import { useDispatch } from "react-redux";
import "../css/LoginScreen.css"
import { useState } from 'react';

const LoginScreen = () => {
  
  const [input,setInput] = useState({
    email: '',
    password: '',
});
  const dispatch = useDispatch();
  const local = window.localStorage.getItem('login')

//   console.log(local, "este es mi local storage")   //  <--- console,LOG
//  console.log(input, "este es el valor del input")
  const handleLocalLogin = (e) => {
    e.preventDefault();
    dispatch(localLoginUser(input))
    setInput({
      email: '',
      password: '',
    })
  } 


  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };
  
  return <form onSubmit={e => handleLocalLogin(e)} >
  <div className="container">
    <div class="vh-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6 text-black">
            <div class="px-5 ms-xl-4">
              <span class="h1 fw-bold mb-0 text-center">iGroup-6</span>
            </div>

            <div class="d-flex align-items-center h-custom-2 px-5 mt-5 pt-xl-0 ">
              <div style={{ width: "20rem" }}>
                <h3
                  class="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3>

                <div>
                  <input
                    type="text"
                    class="form-control mb-2"
                    placeholder="email"
                    value={input.email}
                    onChange={(e) =>
                      setInput({ ...input, email: e.target.value })
                    }
                    required        
                  />
                </div>

                <div class="form">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      value={input.password}
                      onChange={(e) =>
                        setInput({ ...input, password: e.target.value })
                      }
                      required
    
                    />
                </div>
                <br />

                <div class="pt-1 mb-4">
                  <button
                    class="btn btn-lg btn-block"
                    style={{background:'609bd1'}}
                    type="submit"
                    href=" "
                  >
                    Login
                  </button>
                  <p class="form-label text-center" >OR</p>
                  <GoogleButton type="light" onClick={handleGoogleLogin} />
                </div>

                <p class="small mb-5 pb-lg-2">
                  <a class="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?{" "}
                  <a href=" " class="link-info" >
                    Register here
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/9135bd6fc06088352f143d3d3c0043bb/medium.JPG"
              alt="Login i"
              class="w-100 vh-100"
              style={{ objectFit: "unset", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</form>;
};

export default LoginScreen;
