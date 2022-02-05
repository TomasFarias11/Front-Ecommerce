import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {getUserId, editUser} from "../actions/actionUser.js"
import swal from 'sweetalert';


const EditProfie = () => {
    const userId = useSelector((state) => state.secondRed.userData)
    const user = useSelector((state) => state.secondRed.userId)
    const userStorage = JSON.parse(window.localStorage.getItem('usuario'))
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        username: userStorage.username,
        email: userStorage.email,
        name: userStorage.name,
        lastName: userStorage.lastName,
        address: userStorage.address,
        image: userStorage.image ? userStorage.image : "http://assets.stickpng.com/images/585e4bd7cb11b227491c3397.png",
        admin: userStorage.admin,
        // password: '',
        id: userStorage.id
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editUser(userId.id, input))
        window.localStorage.setItem('usuario', JSON.stringify(input))
        swal("Perfil modificado con exito!", {
            buttons: false,
            icon: 'success',
            timer: 2000,
          });
        setInput({
            username: input.username,
            email: input.email,
            name: input.name,
            lastName: input.lastName,
            address: input.address,
            image: input.image,
            admin: input.admin,
            // password: '',
            id: userStorage.id
        })
        Navigate('/profile')
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Nombre de Usuario:</label>
                </div>
                    <input type="text" value = {input.username} name="username" onChange={(e) => handleChange(e)}/>
                <div>
                    <div>
                        <label>Email:</label>
                    </div>
                    <input type="text" value = {input.email} name="email" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <div>
                        <label>Nombre:</label>
                    </div>
                    <input type="text" value = {input.name} name="name" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <div>
                        <label>Apellido:</label>
                    </div>
                    <input type="text" value = {input.lastName} name="lastName" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label>Imagen:</label>
                    <input type="text" value = {input.image} name="image" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <div>
                        <label>Domicilio:</label>
                    </div>
                    <input type="text" value = {input.address} name="address" onChange={(e) => handleChange(e)}/>
                </div>
                {/* <div>
                    <div>
                        <label>Contraseña:</label>
                    </div>
                    <input type="password" value = {input.password} name="password" onChange={(e) => handleChange(e)}/>
                </div> */}
                
                <button type="submit">Editar Perfil</button>
            </form>
        </div>
    )
}

export default EditProfie