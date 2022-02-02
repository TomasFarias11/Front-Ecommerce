import React from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteUser,editUser} from "../../actions/actionAdmin"
import {useState} from "react";
import { useParams } from "react-router";
import { useEffect } from 'react';
import { getUsers } from '../../actions/actionAdmin';
import Swal from 'sweetalert2'
import { use } from 'bcrypt/promises';


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
            title: 'Cambiar estado de admin?',
            text: "¿Estás seguro que deseas editar a este usuario?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
            }).then((result) => {
                if (result.isConfirmed) {
                    const a=e.target.value.split(',')
                    const id=parseInt(a[0])
                    const admin=a[1]==='true'
                    dispatch(editUser(id,admin))
                    console.log('????',a[1])
                    Swal.fire(
                    'Modificado',
                    'El usuario ha sido modificado.',
                    'success'
                    )
                }
        })
    }

  useEffect(()=>{
    dispatch(getUsers())
  },[]);

return (
  <div className="row">
    <div className="col-lg-3">
      <div className="container-sm" style={{ padding:20, paddingTop:0 } }> 
        <div className="badge fs-3 bg-dark text-wrap" style={{ width: "20rem" }}>
          Administración de Usuarios
        </div>
      </div>
    </div>
    <div className=" card col-lg-8"style={{ paddingTop:15 } }>
      <table className="table table-hover table-bordered">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Usuario</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Admin</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          { users.map((e)=>
          <tr key={e.id}>
            <th scope="row">{e.id}</th>
            <td>{e.username}</td>
            <td>{e.name}</td>
            <td>{e.lastName}</td>
            <td>{e.email}</td>
            <td>
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                <div class="btn-group" role="group" >
                  <button id="btnGroupDrop1" type="button" class="btn btn-primary px-3 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" btn-padding-y="222">
                    {(e.admin) ?  "Si  "  : "No"}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  { e.admin ? 
                  <li>
                    <button className="dropdown-item" name="admin" value={[e.id,false]} onClick={(e)=>handelEdit(e)}> No </button>
                  </li> 
                  :
                  <li>
                    <button className="dropdown-item" name="admin" value={[e.id,true]} onClick={(e)=>handelEdit(e)}> Si </button>
                  </li>}
                  </ul>
                </div>
              </div>
            </td>
            <td>
              <button type="button" class="btn btn-danger btn-sm px-4" value={e.id} onClick={(e)=>handelDetele(e)}>
                <i class="fas fa-times"></i>
              </button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
)}
export default AdminUser;
