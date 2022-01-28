import React from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteProduct} from "../../actions/actionAdmin"
import {useState} from "react";

function AdminProduct() {

    const products = useSelector((state) => state.firstRed.products);
    const dispatch = useDispatch()
    let [remove, setRemove]=useState({
        id:"",
    })

    console.log(products)
    console.log(remove)


    const handelDetele=({target:{id,value}})=>{
        setRemove({
            ...remove,
            id:value
        }
        )
        console.log("este es id que pulso", {target:{id,value}})
        dispatch(deleteProduct(value))
    }

  return (
    <div className="row">
    <div className="col-lg-3">
        <div className="container-sm" style={{ padding: 20 } }>   
            <div >
                <div className="dropdown">
                <Link to="/admin/addProduct">
                <button type="button" class="btn btn-outline-secondary" >Agregar Productos</button>
                </Link>
                </div>
                <br/>
                <div className="dropdown">
                <Link to="/admin/addCategory">
                <button type="button" class="btn btn-outline-secondary" >Agregar Categoria</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    <div className=" card col-lg-8">
                    <div className="container-sm bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{ padding: 20 } } >
                        <div className="row row-cols-0 row-cols-md-3 g-5 mask animate__animated animate__bounceIn" Style="background-color: #FAFAFA"    >
                            <ul>
                                {
                                    products.map(e=>
                                        <li>id:{e.id} nombre: {e.name} categoria: {e.idCategory}
                                        <Link to={`/admin/edit/${e.id}`}>
                                            <button>editar</button>
                                        </Link>
                                        <button name="id" value={e.id} onClick={(e)=>handelDetele(e)}>X</button></li>
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