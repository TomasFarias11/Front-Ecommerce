import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserId, editUser } from "../actions/actionUser.js";
import swal from "sweetalert";
import axios from "axios";

const EditProfie = () => {
  const userId = useSelector((state) => state.secondRed.userData);
  const user = useSelector((state) => state.secondRed.userId);
  const userStorage = JSON.parse(window.localStorage.getItem("usuario"));
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    username: userStorage.username,
    email: userStorage.email,
    name: userStorage.name,
    lastName: userStorage.lastName,
    address: userStorage.address,
    image: userStorage.image
      ? userStorage.image
      : "https://i.postimg.cc/cHWhrsQL/user.png",
    admin: userStorage.admin,
    // password: '',
    id: userStorage.id,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(userId.id, input));
    window.localStorage.setItem("usuario", JSON.stringify(input));
    swal("Perfil modificado con exito!", {
      buttons: false,
      icon: "success",
      timer: 2000,
    });
    setInput({
      username: input.username,
      email: input.email,
      name: input.name,
      lastName: input.lastName,
      address: input.address,
      image: input.image,
      admin: input.admin,
      // password: '',
      id: userStorage.id,
    });
    Navigate("/profile");
  };

  const handelImagen = async(e)=>{
    e.preventDefault()
    const files=e.target.files;
    const data =new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "group6");

    const res= await axios.post(`https://api.cloudinary.com/v1_1/groupapple/image/upload`, data)

    const file=res.data;
    
     setInput({
       ...input,
       [e.target.name]:file.url
     })
  }

  return (
    <div className=" card col-lg-13 mt-4">
      <div className="container mt-1 mb-4 mx-0">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header d-flex align-items-center">
                  <div className="container-sm d-flex justify-content-center" style={{ padding: 0, paddingTop: 0 }}>
                    <div className="badge fs-5 bg-info text-wrap" style={{ width: "20rem" }}>
                      Editar información de Usuario
                    </div>
                  </div>
                </div>

                <div className="card-group">
                  <div className="card-body">
                    <div className="col-sm-10">
                      <label>Nombre de Usuario:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={input.username}
                        name="username"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-group">
                  <div className="card-body">
                    <div className="col-sm-10">
                      <label>Email:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={input.email}
                        name="email"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-group">
                  <div className="card-body">
                    <div className="col-sm-10">
                      <label>Nombre:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-group">
                  <div className="card-body">
                    <div className="col-sm-10">
                      <label>Apellido:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={input.lastName}
                        name="lastName"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-group">
                  <div className="card-body">
                    <div className="col-sm-10">
                      <label>Imagen:</label>
                      <input name="image" 
                      accept="image/png,image/jpg"  
                      onChange={handelImagen} type="file" 
                      className="form-control-file"/>
                    </div>
                  </div>
                </div>
                <div className="card-group">
                  <div className="card-body">
                    <div className="col-sm-10">
                      <label>Domicilio:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={input.address}
                        name="address"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                {/* <div>
                    <div>
                        <label>Contraseña:</label>
                    </div>
                    <input type="password" value = {input.password} name="password" onChange={(e) => handleChange(e)}/>
                </div> */}
                <div className="card-body">
                  <div className="col-sm-11">
                    <div className="form-group d-flex justify-content-center mt-2">
                      <button className="btn btn-success btn-lg d-flex align-items-center float-right" type="submit">
                        Guardar Cambios
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfie;
