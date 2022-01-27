import React from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteProduct} from "../../actions/actionAdmin"

function AdminProduct() {

    const products = useSelector((state) => state.firstRed.products);
    const dispatch = useDispatch()

    console.log(products)

    const handelDetele=(id)=>{
        console.log("este es id que pulso", id)
        dispatch(deleteProduct(id))
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
                                        <li>id:{e.id} nombre: {e.name} categoria: {e.idCategory} <button onClick={()=>handelDetele(e.id)}>X</button></li>
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

{/*                          {
                                products.map(e =>
                                    <div className="col" key={e.id}>
                                        <div className="card animate__animated animate__bounceIn" >
                                            <img src={e.image !== 'not found' ? e.image : "https://i.postimg.cc/SK600jXG/OIP.jpg"} className="card-img-top img-fluid" alt={e.image} style={{padding:"30 0", height: "300px"}} />
                                            <div className="card-body">
                                                <h5 className="card-title">{e.name}</h5>
                                                <p className="card-text">{e.category}  ${e.price}</p>
                                                
                                                    <button className="btn btn-outline-secondary rounded-pill">Editar</button>
                                                
                                                
                                                    <button className="btn btn-outline-secondary rounded-pill">Borrar</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            } */}
