import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCategoryById, editCategory } from "../../actions/actionAdmin";
import Swal from 'sweetalert2'
import swal from 'sweetalert';

function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categorytId = useSelector((state) => state.fourthRed.categoryId);
  const [inputBody, setInputBody] = useState({
    name: "",
  });

  // console.log(categorytId);

  function handelInput(e) {
    e.preventDefault();
    setInputBody({
      ...inputBody,
      [e.target.name]: e.target.value,
    });
  }

  function handelSubmit(e) {
    e.preventDefault();
    if (inputBody.name !== "") {
      swal("Categoria Editada Correctamente", {
        buttons: false,
        icon: 'success',
        timer: 1500,
      });
      dispatch(editCategory(id, inputBody));
      setInputBody({
        name: "",
      });
      navigate("/admin/Category");
    } else {
       Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, rellene los campos necesarios para editar la Categoria',
        })
    }
  }

  useEffect(() => {
    dispatch(getCategoryById(id));
  }, []);

  return (
    <div className="row">
      <div className="col-lg-3">
        <div className="container-sm" style={{ padding: 20 }}>
        <div className="container-sm d-flex justify-content-center" style={{ padding: 20, paddingTop: 0 }}>
              <div className="badge fs-4 bg-dark text-wrap" style={{ width: "20rem" }}>
                Formulario para editar Categoría existente
              </div>
            </div>

          <div>
            <div className="d-flex justify-content-center">
              <Link to="/admin/Category">
                <button type="button" className="btn btn-outline-info btn-lg">
                  Categorías
                </button>
              </Link>
            </div>
            <br />
          </div>
        </div>
      </div>
      <div className=" card col-lg-8">
        <br />
        <div className="card-header d-flex align-items-center">
          <div className="container-sm d-flex justify-content-center" style={{ padding: 0, paddingTop: 0 }}>
            <div className="badge fs-5 bg-info text-wrap" style={{ width: "20rem" }}>
              Editar Categoría
            </div>
          </div>
        </div>

        <br />
        <div className="row">
        <div className=" card col-lg-10" >
        <div className="form-group">
        <div className="container">
        <div className="row featurette">
        <div className="col-md-10 order-md-2" style={{ paddingRight: 10, marginLeft:10, marginBottom:20 }}>

        <form onSubmit={(e) => handelSubmit(e)}  >
          <div className="form-group">
            <label htmlFor="htmlFor">Nombre de Categoría</label>
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
          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            Editar Categoría
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default EditCategory;
