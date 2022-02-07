import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategory,
  editCategory,
  deleteCategory,
} from "../../actions/actionAdmin";
import swal from "sweetalert";
import Swal from "sweetalert2";

function AdminCategory() {
  const allCategory = useSelector((state) => state.fourthRed.category);
  const dispatch = useDispatch();

  const handelDetele = (e) => {
    Swal.fire({
      title: "Advertencia!!",
      text: "Si elimina la categoria estará los productos asociados a esta categoria no perteneceran a ninguna categoria¿Estas seguro que deseas eliminar la categoria?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCategory(e.target.value));
        Swal.fire("Eliminado", "La categoria ha sido eliminada.", "success");
      }
    });
  };

    // 

    const handelDetele=(e)=>{

        Swal.fire({
            title: 'Advertencia!!',
            text: "Si elimina la categoria estará los productos asociados a esta categoria no perteneceran a ninguna categoria¿Estas seguro que deseas eliminar la categoria?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteCategory(e.target.value))
                    Swal.fire(
                    'Eliminado',
                    'La categoria ha sido eliminada.',
                    'success'
                    )
                }
            })
    }


useEffect(() => {
    dispatch(getCategory())
  }, [])

  return (
    <div className="row">
      <div className="col-lg-3">
        <div className="container-sm d-flex justify-content-center" style={{ padding: 20, paddingTop: 0 }}>
          <div className="badge fs-3 bg-dark text-wrap"style={{ width: "20rem" }}>
            Administración de Categorías
          </div>
        </div>
        <div className="d-flex justify-content-center" style={{ paddingTop: 0 }}>
          <Link to="/admin/addCategory">
            <button type="button" className="btn btn-outline-success btn-lg">
              Añadir Categoría
            </button>
          </Link>
        </div>
      </div>
      <div className=" card col-lg-8" style={{ paddingTop: 15 }}>
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Nombre de Categoría</th>
              <th className="text-center" scope="col">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {allCategory.map((e) => (
              <tr key={e.idCategory}>
                <td>{e.name}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <Link to={`/admin/Category/${e.idCategory}`}>
                      <button className="btn btn-outline-warning" style={{ marginRight: 10 }}>
                        Editar
                      </button>
                    </Link>
                    <button className="btn btn-outline-danger" name="id" value={e.name} onClick={(e) => handelDetele(e)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminCategory;
