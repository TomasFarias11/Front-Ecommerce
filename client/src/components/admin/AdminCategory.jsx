import React from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {getCategory} from "../../actions/actionAdmin";
import {useEffect} from "react";

function AdminCategory() {

    const allCategory = useSelector((state)=>state.fourthRed.category);
    const dispatch = useDispatch()


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
                            <ul className="list-group list-group-flush">
                                {
                                    allCategory.map(e=>
                                        <li className="list-group-item" key={e.idCategory}><p><b>{e.name}</b></p>
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