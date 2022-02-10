import React from "react";
import { useState } from "react";
import { postUserCreate } from "../actions/actionProducts";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../css/SigninScreen.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "se requiere un nombre";
  }
  if (!input.lastName) {
    errors.lastName = "Se requiere apellido";
  }
  if (!input.defense) {
    errors.email = "Se requiere email";
  }

  return errors;
}

const Formularios = () => {

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    lastName: "",
    image: "",
    address: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUserCreate(input));
    setInput({
      username: "",
      email: "",
      password: "",
      name: "",
      lastName: "",
      image: "",
      address: "",
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    Navigate('/login')
  };

  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="container w-75 bg-primary mt-4 rounded shadow">
            <div className="row align-items-center align-items-stretch">
              <div className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded bg2"></div>
              <div className="col bg-white p-5 col-lg-7 col-xl-6 rounded-end">
                <div className="text-center">
                  <img
                    src="https://i.postimg.cc/WznK6qfm/igroup-log.png"
                    alt="logo"
                    style={{ width: 200 }}
                  />
                </div>
                <h4 className="fw-light text-center pt-1 mb-4">Regístrate</h4>
                {/* Formulario de login */}
                <div className="card-group">
                  <div className="mb-3 me-5 col-sm-5">
                    <label htmlFor="firstName" className="form-label">
                      {" "}
                      Nombre{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingrese su nombre"
                      aria-label="Username"
                      value={input.name}
                      name="name"
                      onChange={(e) => handleChange(e)}
                      required={true}
                    />
                  </div>

                  <div className="mb-3 col-sm-5">
                    <label htmlFor="lasName" className="form-label">
                      {" "}
                      Apellido{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingrese su apellido"
                      value={input.lastName}
                      name="lastName"
                      onChange={(e) => handleChange(e)}
                      required={true}
                      aria-label="Server"
                    />
                  </div>
                </div>
                <div className="mb-3 col-sm-11">
                  <label htmlFor="userName" className="form-label">
                    {" "}
                    Nombre de Usuario{" "}
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ingrese su nombre de usuario"
                    value={input.username}
                    name="username"
                    onChange={(e) => handleChange(e)}
                    required={true}
                  />
                </div>
                <div className="mb-3 col-sm-11">
                  <label htmlFor="password" className="form-label">
                    {" "}
                    Contraseña{" "}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Ingrese su contraseña"
                    value={input.password}
                    name="password"
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className="mb-4 col-sm-11">
                  <label htmlFor="email" className="form-label">
                    {" "}
                    Correo electrónico{" "}
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    value={input.email}
                    name="email"
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className="mb-5 col-sm-11">
                  <label htmlFor="email" className="form-label">
                    {" "}
                    Dirección{" "}
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ingrese su dirección"
                    value={input.address}
                    name="address"
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    onSubmit={(e) => e}
                    className="btn text-white btn-success"
                  >
                    {" "}
                    Crear Usuario{" "}
                  </button>
                </div>
                <div className="my-3">
                  <span>
                    {" "}
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login">Inicia Sesión</Link>
                  </span>
                  <br />
                  {/* <span> <a href="# "> Recuperar password </a> </span> */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Formularios;
