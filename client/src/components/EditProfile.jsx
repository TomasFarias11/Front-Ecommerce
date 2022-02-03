import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {getUserId, editUser} from "../actions/actionUser.js"


const EditProfie = () => {
    const userId = useSelector((state) => state.secondRed.userData)
    const user = useSelector((state) => state.secondRed.userId)
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        username: user.username,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        address: user.address,
        image: user.image,
        admin: user.admin,
        password: '',
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
        window.localStorage.setItem('usuario', JSON.stringify({username: user.username, id: user.id, admin: user.admin}))
        alert("Perfil modificado!")
        setInput({
            username: user.username,
            email: user.email,
            name: user.name,
            lastName: user.lastName,
            address: user.address,
            image: user.image,
            admin: user.admin,
            password: '',
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
                    <input type="text" value = {input.image} name="image"/>
                </div>
                <div>
                    <div>
                        <label>Domicilio:</label>
                    </div>
                    <input type="text" value = {input.address} name="address" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <div>
                        <label>Contraseña:</label>
                    </div>
                    <input type="password" value = {input.password} name="password" onChange={(e) => handleChange(e)}/>
                </div>
                
                <button type="submit">Editar Perfil</button>
            </form>
        </div>
    )
}

export default EditProfie