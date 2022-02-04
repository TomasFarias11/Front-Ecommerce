import React from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {useState} from "react";
import { useParams } from "react-router";
import {deleteProduct} from "../../actions/actionAdmin"
import { useEffect } from 'react';
import { getProducts } from '../../actions/actionProducts'
import Swal from 'sweetalert2'

function AdminProduct() {

    const products = useSelector((state) => state.firstRed.products);
    const dispatch = useDispatch()

    console.log(products)


    const handelDetele=(e)=>{

        Swal.fire({
            title: '¿Eliminar?',
            text: "¿Estas seguro que deseas eliminar el producto?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteProduct(e.target.value))
                    Swal.fire(
                    'Eliminado',
                    'El producto ha sido eliminado.',
                    'success'
                    )
                }
            })
    }


    useEffect(()=>{
        dispatch(getProducts())
    },[])

  return (
    <div className="row">
    <div className="col-lg-3">
        <div className="container-sm" style={{ padding: 20 } }>   
            <div >
                <div className="dropdown">
                <Link to="/admin/addProduct">
                <button type="button" className="btn btn-outline-secondary" >Agregar Productos</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    <div className=" card col-lg-8">
                    <div className="container-sm bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{ padding: 20 } } >
                        <div className="row" Style="background-color: #FAFAFA"    >
                            <ul className="list-group list-group-flush">
                                {
                                    products.map(e=>
                                        <li className="list-group-item" key={e.id}><p><b>ID: </b>{e.id}</p> <p><b>Nombre: </b> {e.name}</p> <p><b>Categoria: </b> {e.idCategory}</p>
                                            <Link to={`/details/${e.id}`}>
                                                <button className="btn btn-primary" style={{marginRight:10}}>Ir al detalle</button>
                                            </Link>
                                            <Link to={`/admin/edit/${e.id}`}>
                                                <button className="btn btn-warning" style={{marginRight:10}}>Editar</button>
                                            </Link>
                                            <button className="btn btn-danger" name="id" value={e.id} onClick={(e)=>handelDetele(e)}>X</button>
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

export default AdminProduct;