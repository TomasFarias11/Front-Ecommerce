import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addCategory} from "../../actions/actionAdmin";

function AddCategory() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputBody , setInputBody] = useState({
    name:"",
  })

  function handelInput(e){
    e.preventDefault()
    setInputBody({
      ...inputBody,
      [e.target.name]: e.target.value,
    });
  }

  function handelSubmit(e) {
    e.preventDefault();
    if (inputBody.name !== "") {
      alert("Nueva categoria agregada");
      dispatch(addCategory(inputBody));
      setInputBody({
        name: "",
      });
    } else {
      alert("ingrese el nombre de la nueva categoria");
    }
    navigate("/admin/Category")
  }

  return (
    <div className="row">
      <div className="col-lg-3">
        <div
          className="container-sm d-flex justify-content-center"
          style={{ padding: 20, paddingTop: 0 }}
        >
          <div
            className="badge fs-3 bg-dark text-wrap"
            style={{ width: "20rem" }}
          >
            Formulario para crear nueva Categoría
          </div>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: 0 }}
        >
          <Link to="/admin/Category">
            <button type="button" className="btn btn-outline-info btn-lg">
              Lista de Categorías
            </button>
          </Link>
        </div>
      </div>

      <div className=" card col-lg-8">
        <div className="container mt-4 mb-5 mx-3">
          <form onSubmit={(e) => handelSubmit(e)}>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center">
                    <div className="container-sm d-flex justify-content-center" style={{ padding: 0, paddingTop: 0 }}>
                      <div className="badge fs-5 bg-info text-wrap" style={{ width: "20rem" }}>
                        Complete los siguientes campos
                      </div>
                    </div>
                  </div>

                  <div className="card-group">
                    <div className="card-body">
                      <div className="col-sm-10">
                        <label for="exampleInputName">
                          Nombre de la nueva Categoría
                        </label>
                        <input
                          name="name"
                          value={inputBody.name}
                          onChange={(e) => handelInput(e)}
                          type="text"
                          className="form-control"
                          id="exampleInputName"
                          aria-describedby="emailHelp"
                          placeholder="Ingrese el nombre"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="col-sm-11">
                      <div className="form-group d-flex justify-content-center mt-2">
                        <button
                          className="btn btn-success btn-lg d-flex align-items-center float-right"
                          type="submit"
                          style={{ marginTop: 0, marginBottom: 10 }}
                        >
                          Añadir Categoría
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
    </div>
  );
}

export default AddCategory;
