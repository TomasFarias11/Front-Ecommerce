import { React, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, editUser } from "../actions/actionUser.js";
import EditProfile from "./EditProfile.jsx";

const Perfil = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.secondRed.userData);
  const userId = useSelector((state) => state.secondRed.userId);
  const userStorage = JSON.parse(window.localStorage.getItem("usuario"));
  const order = useSelector((state) => state.firstRed.order);
  const [controlador, setControlador] = useState(false);

  useEffect(() => {
    dispatch(getUserId(user.id));
  }, []);

  const handleControl = (e) => {
    e.preventDefault();
    if (controlador === false) {
      setControlador(true);
    } else {
      setControlador(false);
    }
  };

  return (
    <div className="container">
      <div className="container-sm d-flex justify-content-center" style={{ padding: 20, paddingTop: 0 }}>
        <div className="badge fs-3 bg-dark text-wrap" style={{ width: "20rem" }}>
          Perfil de Usuario
        </div>
      </div>
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={
                    userStorage.image
                      ? userStorage.image
                      : "https://i.postimg.cc/cHWhrsQL/user.png"
                  }
                  alt="Admin"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h4>{userStorage.username}</h4>
                </div>
              </div>
            </div>
          </div>
          {controlador === true ? (
            <div className="justify-content-center">
              <EditProfile />
              <div className="card-body">
                <div className="col-sm-11">
                  <div className="form-group d-flex justify-content-center mt-2">
                    <button className="btn btn-outline-danger btn-lg d-flex align-items-center float-right" onClick={(e) => handleControl(e)}>
                      Cancelar Edición
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="card-body">
              <div className="col-sm-11">
                <div className="form-group d-flex justify-content-center mt-2">
                  <button className="btn btn-outline-info btn-lg d-flex align-items-center float-right" onClick={(e) => handleControl(e)}>
                    Editar Perfil
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Nombre Completo</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userStorage.name} {userStorage.lastName}
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userStorage.email}
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Permisos de administrador</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {`${userStorage.admin}`}
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Inicio de sesion con Google</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {`${
                    userStorage && userStorage.loginWithGoogle
                      ? userStorage.loginWithGoogle
                      : false
                  } `}
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {userStorage.address && userStorage.address === "null"
                    ? "Dato no ingresado"
                    : userStorage.address}
                </div>
              </div>

              <hr />
            </div>
          </div>

          {/*aqui se puede colocar un ternario para saber si es usuario o es admin */}

          <div className="row gutters-sm">
            <div className="col-sm-12 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center mb-3">Ordenes</h6>
                  <small>Numero de orden: {order[0]?.id}</small> <br />
                  <small>Estado de la orden: {order[0]?.status}</small>
                  <div>
                    {order[0] &&
                      order[0].carrito.map((e) => (
                        <div>
                          <small>Nombre de producto: {e.name}</small> <br />
                          <small>Precio: {e.price}</small> <br />
                          <small>Cantidad: {e.quantity}</small>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;