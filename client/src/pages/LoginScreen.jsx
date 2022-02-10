import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { googleLogin, localLoginUser  } from "../actions/actionUser"
import { useDispatch } from "react-redux";
import "../css/LoginScreen.css"
import { useState } from 'react';
import swal from "sweetalert";

const LoginScreen = () => {
  
  const [input,setInput] = useState({
    email: '',
    password: '',
});

const [mail, setMail] = useState({name: ''});
const handleInputChangeMail = function(e) {
  setMail({
    ...mail,
    [e.target.name]: e.target.value
  });
}
const handleSubmitMail =async (e) => {
  e.preventDefault()
  await axios.put('/user',mail).then (res => {
    swal("eMail enviado con exito!", {
        buttons: false,
        icon: "success",
        timer: 2000,
      });
    }).catch(err => {
      swal("Error, el usuario no existe!", {
        buttons: false,
        icon: "error",
        timer: 2000,
      });
    }
    )
}

  const dispatch = useDispatch();
  // const local = window.localStorage.getItem('login')
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
<div style={{marginBottom: 40 }} >
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

            <br />
            <div className="col-md-4 col-lg-3 col-xl-12 mx-auto mb-md-0 mb-4">
                
                <div className='d-grid'>
                  <button
                    type="button"
                    className="btn btn-info text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@igroup"
                  >
                    {/* <i class="far fa-comment-dots"></i> */} ¿Olvidaste tu contraseña?
                  </button>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Ingrese su mail para restablecer la contraseña
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          {/* <form> */}
                            <div className="mb-3">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                Email:
                              </label>
                              <input
                                type="email"
                                value={mail.email} 
                                name="email" 
                                onChange={handleInputChangeMail}
                                className="form-control"
                                id="recipient-name"
                              />
                            </div>
                          {/* </form> */}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                          <button type="submit" 
                          value="Enviar Mail"
                          data-bs-dismiss="modal"
                          onClick={handleSubmitMail} 
                          className="btn btn-success">
                            Enviar Mail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                
            </div>

            <div className="my-3">
              <span> ¿No tienes una cuenta? <Link to = "/user">Regístrate</Link></span>
              <br />
              {/* <span> <a href="# "> Recuperar password </a> </span> */}
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
        
        </div>
      </div>
    </div>
  </form>
</div>
  );
};

export default LoginScreen;
