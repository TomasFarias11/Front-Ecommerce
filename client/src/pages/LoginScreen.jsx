import React from 'react';
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
  
  return (
<div>
  <form onSubmit={e => handleLocalLogin(e)} >
    <div className="container w-75 bg-primary mt-5 rounded shadow">
      <div className="row align-items-center align-items-stretch">
        <div className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded bg"></div>
        <div className="col bg-white p-5 col-lg-7 col-xl-6 rounded-end">
          <div className="text-end">
            <img src="https://i.postimg.cc/WznK6qfm/igroup-log.png" alt='logo' style={{ width: 200 }} />
          </div>
          <h2 className="fw-bold text-center pt-5 mb-5">Bienvenido</h2>
          {/* Formulario de login */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label"> Correo electrónico </label>
              <input type="text" 
              className="form-control mb-2" 
              placeholder="email" 
              value={input.email} 
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              required        
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label"> Contraseña </label>
              <input type="password" 
              className="form-control"
              placeholder="Password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              required
              />
            </div>
            <div className="mb-4 form-check">
              <input type="checkbox" className="form-check-input" name="connected" />
              <label className="form-check-label" htmlFor="connected"> Mantenerme conectado </label>
            </div>
            <div className="d-grid">
              <button type="submit" onSubmit={e => handleLocalLogin(e)} className="btn btn-primary"> Iniciar sesión </button>
            </div>
            <div className="my-3">
              <span> No tienes una cuenta? <a href="# "> Regístrate </a> </span>{" "}
              <br />
              <span> <a href="# "> Recuperar password </a> </span>
            </div>
          {/* Login con google */}
          <div className="container w-100 my-5">
            <div className="row my-3 text-center">
              <div className="col-12"> Iniciar sesión con </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-outline-danger w-100 my-1" type="button" onClick={handleGoogleLogin}>
                  <div className="row align-items-center">
                    <div className="d-none d-md-block col-3 col-lg-4 col-xl-4 col-xxl-3 text-center">
                      <img src="https://i.postimg.cc/Y04ZG5n6/google.png" width="30%" alt='' />
                    </div>
                    <div className="col-12 col-md-9 col-lg-8 col-xl-8 col-xxl-6 text-center">
                      Google
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* */}
        </div>
      </div>
    </div>
  </form>
</div>
  );
};

export default LoginScreen;
