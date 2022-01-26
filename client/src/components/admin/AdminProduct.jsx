import React from 'react';
import { Link } from "react-router-dom";

function AdminProduct() {
  return (
    <div className="row">
    <div className="col-lg-3">
        <div className="container-sm" style={{ padding: 20 } }>   
            <div >
                <div className="dropdown">
                <Link to="/admin/create">
                <button type="button" class="btn btn-outline-secondary" >Crear Producto</button>
                </Link>
                </div>
                <br/>
                <div className="dropdown">
                <Link to="/admin/edit">
                <button type="button" class="btn btn-outline-secondary" >Editar Producto</button>
                </Link>
                </div>
                <br/>
                <div className="dropdown">
                <Link to="/admin/delete">
                <button type="button" class="btn btn-outline-secondary" >Eliminar Producto</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    <div className=" card col-lg-8">
                    <div className="container-sm bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{ padding: 20 } } >
                        {/* <h1>{products? products[0].name : "iPhone"}</h1> */}
                        <div className="row row-cols-0 row-cols-md-3 g-5 mask animate__animated animate__bounceIn" Style="background-color: #FAFAFA"    >

                            <h1>Informacion de los prodcutos puede ser cantidad o que se te ocurre para poner aqui?</h1>
                        </div>
                    </div>
                </div>
    </div>
  )

}

export default AdminProduct;
