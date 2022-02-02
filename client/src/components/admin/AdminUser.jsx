import React from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteUser} from "../../actions/actionAdmin"
import {useState} from "react";
import { useParams } from "react-router";
import { useEffect } from 'react';
import { getUsers } from '../../actions/actionAdmin';
import Swal from 'sweetalert2'


function AdminUser() {
    const userLoguer = JSON.parse(window.localStorage.getItem('usuario')).id;
    const users = useSelector((state) => state.fourthRed.users.filter(u=>u.id !== userLoguer));
  
    console.log('USUARIO LOGUEADO', userLoguer)
    //users = users.filter(u=>u.id !== userLoguer);
    console.log('USER',users)
    const dispatch = useDispatch()


    const handelDetele=(e)=>{

    Swal.fire({
        title: '¿Eliminar?',
        text: "¿Estás seguro que deseas eliminar este usuario?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(e.target.value))
                Swal.fire(
                'Eliminado',
                'El usuario ha sido eliminado.',
                'success'
                )
            }
        })
    }

    const handelEdit =(e)=>{
        Swal.fire({
            title: 'Volver administrador?',
            text: "¿Estás seguro que deseas volver administrador a este usuario?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteUser(e.target.value))
                    Swal.fire(
                    'Eliminado',
                    'El usuario ha sido eliminado.',
                    'success'
                    )
                }
            })

    }

  useEffect(()=>{
      dispatch(getUsers())
  },[users.id]); 

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
          </div>
      </div>
  </div>
  <div className=" card col-lg-8">
                  <div className="container-sm bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{ padding: 20 } } >
                      <div className="row" Style="background-color: #FAFAFA"    >
                          <ul class="list-group list-group-flush">
                              {
                                  users.map(e=>
                                      <li class="list-group-item" key={e.id}>
                                        <p><b>ID: </b>{e.id}</p> 
                                        <p><b>Username: </b> {e.username}</p> 
                                        <p><b>Nombre: </b> {e.name}</p> 
                                        <p><b>Apellido: </b> {e.lastName}</p> 
                                        <p><b>Email: </b> {e.email}</p>
                                        <p><b>Admin: </b> {e.admin.toString()}</p>
                                              {/* <button class="btn btn-primary" style={{marginRight:10}}>editar</button> */}
                                              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                              <li className="nav-item dropdown">
                                <a class="btn btn-primary" style={{marginRight:10}} href=" " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Admin </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    { e.admin ? <li>
                                        <button className="dropdown-item" name="admin" value={!e.admin} onClick={(e)=>handelEdit(e)}> Admin: No </button>
                                    </li> :
                                    <li>
                                        <button className="dropdown-item" name="admin" value={!e.admin} onClick={(e)=>handelEdit(e)}> Admin: Si </button>
                                    </li>}
                                </ul>
                            </li></ul>
                                          <button class="btn btn-danger" name="id" value={e.id} onClick={(e)=>handelDetele(e)}>X</button>
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

export default AdminUser;
