import React from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteProduct} from "../../actions/actionAdmin"
import { useEffect } from 'react';
import { getProducts } from '../../actions/actionProducts'
import Swal from 'sweetalert2'

function AdminProduct() {

    const products = useSelector((state) => state.firstRed.products);
    const dispatch = useDispatch()


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
            <div className="container-sm d-flex justify-content-center" style={{ padding:20, paddingTop:0 }}> 
                <div className="badge fs-3 bg-dark text-wrap" style={{ width: "20rem" }}>
                    Administración de Productos
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{ paddingTop:0 } } >
                <Link to="/admin/addProduct">
                    <button type="button" className="btn btn-outline-success btn-lg">Añadir Producto</button>
                </Link>
            </div>
        </div>
        <div className=" card col-lg-8"style={{ paddingTop:15 } }>
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th  scope="col">Nombre</th>
                        <th scope="col">Categoría</th>
                        <th className="text-center" scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                { products.map((e)=>
                <tr key={e.id}>
                    <th scope="row">{e.id}</th>
                    <td>{e.name}</td>
                    <td className="text-center">
                        {(e.idCategory)===1 ? "iPhone": 
                        (e.idCategory)===2 ? "iPad"  :
                        (e.idCategory)===3 ? "Watch"  :
                        (e.idCategory)===4 ? "Airpods"  :
                        (e.idCategory)===5 ? "Mac"  : 
                        (e.idCategory)===6 ? "TV & Home" 
                        :  "Nueva Categoria"}
                    </td>
                    <td>
                        <div className="d-flex justify-content-center">
                            <Link to={`/details/${e.id}`}>
                                <button className="btn btn-outline-primary" style={{marginRight:10}}>Detalles</button>
                            </Link>
                            <Link to={`/admin/edit/${e.id}`}>
                                <button className="btn btn-outline-warning" style={{marginRight:10}}>Editar</button>
                            </Link>
                            <button className="btn btn-outline-danger" name="id" value={e.id} onClick={(e)=>handelDetele(e)}><i className="fas fa-trash-alt"></i></button>
                        </div>
                    </td>
                </tr>
                )}
                </tbody>
            </table>
        </div>
  </div>
  )

}

export default AdminProduct;