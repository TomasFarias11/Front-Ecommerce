import React from "react";
import swal from 'sweetalert';
import { useEffect, useState } from "react";
import {putReview , postReview , getReviews, postUserCreate} from '../actions/actionProducts'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";



// debo crear la action que me permita conectar con el post
// luego el reducer que asocia la action en donde tendre una copia del estado que llega
// creo el componente que contendra la logica del formlario al que le voy hacer post
// enlazar el componente con el navbar o viceversa para mostrar el componente

function validate(input) {
    let errors = {}
    if(!input.name){
        errors.name = "se requiere un nombre"
    }
    if(!input.lastName){
        errors.lastName = "Se requiere apellido"
    }
    if(!input.defense){
        errors.email = "Se requiere email"
    }
    
    return errors;
}


const CreateUser = () =>{

    const userCreated = useSelector((state) => state.firstRed.users)
    console.log(userCreated, "ESTE ES EL ESTADO GLOBAL")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[error, setError] = useState('')

    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
        lastName: "",
        image: "",
        address: ""
       
    });

    console.log(input, "ESTE ES EL INPUT")

    // function handleSubmit(e){
    //     e.preventDefault()

    //     dispatch(CreateUser(input))
    //     .then(() => {
    //         swal("useuario creado", {
    //             buttons: false,
    //             icon: 'success',
    //             timer: 1500,
    //         })
    //     })
        

    // }
    

    function User(e, input){
        e.preventDefault();
        
        dispatch(CreateUser(input))
        .then(() => {
          swal("User created! ", {
            buttons: false,
            icon: 'success',
            timer: 1500,
            }
            )
          navigate('/users/products')
          
      })

 

    }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })

    }

// si es el mismo correo que muestre una alert o una validacion que indique la exitencia del correo o deshabilitar el boton de crear

// enviar notificacion cuando se crea el usuario


    function handleSubmit(e){
        e.preventDefault()
        console.log(input, "este es el input")
        dispatch(postUserCreate(input))
        .then(() => {
            swal("usuario creado", {
                
                buttons: false,
                icon: 'success',
                timer: 1000,
                })
        })
        // swal("usuario creado")
        setInput({
                username: '',
                email: '',
                password: '',
                name: '',
                lastName: '',
                image: '',
                address: '' 
              })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        })) 
        navigate("/")
    }
 
      


    return(
        <div>
            
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <div>
                        <div>
                            
                            <div> 
                          
                                
                               
                            </div>
                            <div className="container">
                                
                                <div className="row">
                                    
                                    <div className="col-6">
                                        <h4> Crear cuenta</h4>
                                        <div className="input-group px-3 mt-3"> 
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Primer nombre" 
                                            aria-label="Username" 
                                            value={input.name} 
                                            name="name"
                                            onChange={(e) => handleChange(e)} required
                                            /> 
                                            <span>
                                            </span> 
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Ultimo nombre" 
                                            value={input.lastName} 
                                            name="lastName"
                                            onChange={(e) => handleChange(e)} required aria-label="Server"
                                            /> 
                                        </div>
                                    
                                    <div className="mt-3 px-3"> 
                                        <input 
                                        className="form-control" 
                                        type="text" placeholder="nombre de usuario" 
                                        value={input.username}
                                        name="username"
                                        onChange={(e) => handleChange(e)} required
                                        /> 
                                    </div>
                                    <div className="mt-3 px-3"> 
                                        <input type='password' 
                                        className="form-control" 
                                        placeholder="Password" 
                                        value={input.password} 
                                        name="password"
                                        onChange={handleChange} required
                                        /> 
                                    </div>
                                    <div className="mt-3 px-3">
                                        <input 
                                        className="form-control" 
                                        type="email"
                                        placeholder="E-mail" 
                                        value={input.email} 
                                        name="email"
                                        onChange={handleChange} required
                                        /> 
                                    </div>
                                    <div className="mt-3 px-3"> 
                                        <input 
                                        className="form-control"
                                        type="text" 
                                        placeholder="Dirección residencia" 
                                        value={input.address} 
                                        name="address"
                                        onChange={handleChange} required
                                        /> 
                                    </div>
                                    
                                    </div>
                                    <div className="col-6">
                                        <h1>aqui va una imagen</h1>
                                    </div>
                                    <br/>
                                    
                                </div>
                                <br/>
                                <button className="btn btn-outline-secondary" style= {{display: "flex"}} type='submit' onSubmit={(e) => User(e,input)}>Crear usuario</button>
                                
                            </div>
                            <br/>
                        </div>
                        
                    </div>
                </div>
                
            </form>
            

        </div>
    )
}
export default CreateUser;