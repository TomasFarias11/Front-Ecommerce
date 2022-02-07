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

  console.log(categorytId);

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
          <div>
            <div className="dropdown">
              <Link to="/admin/Category">
                <button type="button" className="btn btn-outline-secondary">
                  Categorias
                </button>
              </Link>
            </div>
            <br />
          </div>
        </div>
      </div>
      <div className=" card col-lg-8">
        <br />
        <h1>Editar Categoria: {categorytId.name}</h1>
        <br />
        <form onSubmit={(e) => handelSubmit(e)}>
          <div className="form-group">
            <label for="exampleInputName">Edita la Categoria</label>
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
            className="btn btn-warning"
            type="submit"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            Editar Categoria
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditCategory;
