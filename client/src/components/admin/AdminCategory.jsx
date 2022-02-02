import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {getCategory, editCategory, deleteCategory} from "../../actions/actionAdmin";
import swal from 'sweetalert';
import Swal from 'sweetalert2'

function AdminCategory() {

    const allCategory = useSelector((state)=>state.fourthRed.category);
    const dispatch = useDispatch()
    const [inputBody , setInputBody] = useState({
    name:"",
    })


    function handelInput(e){
        setInputBody({
            ...inputBody,
            [e.target.name]:e.target.value,
        })
    }

    console.log(inputBody)


    function handelSubmit(e){
        e.preventDefault()
        console.log(e.target.value)
    }




    const handelDetele=(e)=>{

        Swal.fire({
            title: 'Advertencia!!',
            text: "Si elimina la categoria estará eliminando todos los productos asociados a esta categoria¿Estas seguro que deseas eliminar la categoria?",
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
                <button type="button" class="btn btn-outline-secondary" >Agregar Categoria</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    <div className=" card col-lg-8">
        <h2>Categorias</h2>
                    <div className="container-sm bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{ padding: 20 } } >
                        <div className="row" Style="background-color: #FAFAFA"    >
                            <ul class="list-group list-group-flush">
                                {
                                    allCategory.map(e=>
                                        <li className="list-group-item" key={e.idCategory}><p><b>{e.name}</b></p>
                                            
                                            <button className="btn btn-danger"  style={{marginRight:10}} name="id" value={e.name} onClick={(e)=>handelDetele(e)}>X</button>
                                            
                                            <button class="btn btn-warning" style={{marginRight:10}}>Editar</button>

                                                <form  value={e.idCategory} onSubmit={e=>handelSubmit(e)} >
                                                    <div class="form-group" style={{marginTop:10}}>
                                                        <input name="name" style={{marginBottom:10}} type="text" class="form-control" value={inputBody.name} onChange={e=>handelInput(e)}  placeholder="Edite la Categoria" aria-describedby="emailHelp"/>
                                                        <button class="btn btn-primary" style={{marginRight:10}} type="submit">Realizar</button>
                                                        <button name="name" class="btn btn-danger">Cancelar</button>
                                                    </div>
                                                </form>
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


{/*      esto es para editar


        function handelInput(e){
        e.preventDefault()
        setInputBody({
            ...inputBody,
            [e.target.name]:e.target.value
        })

    }

    function handelSubmit(e){
        e.preventDefault()

    }

<form  value={e.id} onSubmit={e=>handelSubmit(e)} >
                                                    <div class="form-group" style={{marginTop:10}}>
                                                        <input name="name" style={{marginBottom:10}} type="text" class="form-control" value={inputBody.name} onChange={e=>handelInput(e)} aria-describedby="emailHelp"/>
                                                        <button class="btn btn-primary" style={{marginRight:10}} type="submit">Realizar</button>
                                                        <button name="name" class="btn btn-danger">Cancelar</button>
                                                    </div>
                                                </form>*/}