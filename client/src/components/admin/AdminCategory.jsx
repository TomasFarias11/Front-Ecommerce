import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {getCategory, editCategory, deleteCategory} from "../../actions/actionAdmin";
import swal from 'sweetalert';
import Swal from 'sweetalert2'

function AdminCategory() {

    const allCategory = useSelector((state)=>state.fourthRed.category);
    const dispatch = useDispatch()


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
        <div className="container-sm" style={{ padding: 20 } }>   
            <div >
                <div className="dropdown">
                <Link to="/admin/addCategory">
                <button type="button" className="btn btn-outline-secondary" >Agregar Categoria</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    <div className=" card col-lg-8">
        <h2>Categorias</h2>
                    <div className="container-sm bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{ padding: 20 } } >
                        <div className="row" Style="background-color: #FAFAFA"    >

                            <ul className="list-group list-group-flush" >
                                {
                                    allCategory.map(e=>
                                        
                                        <li className="list-group-item" key={e.idCategory}><p><b>{e.name}</b></p>
                                            <Link to={`/admin/Category/${e.idCategory}`}>
                                            <button className="btn btn-warning" style={{marginRight:10}}>Editar</button>
                                            </Link>
                                            <button className="btn btn-danger"  style={{marginRight:10}} name="id" value={e.name} onClick={(e)=>handelDetele(e)}>X</button>
                                        </li>
                                        
                                    )
                                }
                            </ul>
                        </div>
                    </div>
        </div>
    </div>
  )

}

export default AdminCategory;

