import React from 'react';
import GoogleButton from "react-google-button";
// import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
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
  const Navigate = useNavigate()

//   console.log(local, "este es mi local storage")   //  <--- console,LOG
//  console.log(input, "este es el valor del input")
  const handleLocalLogin = (e) => {
    e.preventDefault();
    dispatch(localLoginUser(input))
    setInput({
      email: '',
      password: '',
    })
    Navigate(`/`)
  } 


  const handleGoogleLogin = async () => {
    dispatch(googleLogin()).then(
      Navigate(`/`)
      )
    // window.location.reload()
  };
  
  return <form onSubmit={e => handleLocalLogin(e)} >
  <div className="containerr">
    <div className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <span className="h1 fw-bold mb-0 text-center">iGroup-6</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 mt-5 pt-xl-0 ">
              <div style={{ width: "20rem" }}>
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3>

                <div>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="email"
                    value={input.email}
                    onChange={(e) =>
                      setInput({ ...input, email: e.target.value })
                    }
                    required        
                  />
                </div>

                <div className="form">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={input.password}
                      onChange={(e) =>
                        setInput({ ...input, password: e.target.value })
                      }
                      required
    
                    />
                </div>
                <br />

                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-lg btn-block"
                    style={{background:'609bd1'}}
                    type="submit"
                    href=" "
                  >
                    Login
                  </button>
                  <p className="form-label text-center" >OR</p>
                  <GoogleButton type="light" onClick={handleGoogleLogin} />
                </div>

                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?{" "}
                  <a href=" " className="link-info" >
                    Register here
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/9135bd6fc06088352f143d3d3c0043bb/medium.JPG"
              alt="Login i"
              className="w-100 vh-100"
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
