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
    if(!input.life){
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

    //   

    //   setInput({
    //     username: '',
    //     email: '',
    //     password: '',
    //     name: '',
    //     lastName: '',
    //     image: '',
    //     address: '' 
    //   })

    }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })

    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(input, "este es el input")
        dispatch(postUserCreate(input))
        alert("usuario creado")
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
    }
 
      


    return(
        <div>
            
            <form onSubmit={(e) => User(e, input)}>
                <div>
                    <div>
                        <div>
                            <h4>Crear cuenta</h4>
                            <div> 
                                <span>
                                    Already have an account?
                                </span> 
                                <Link to="/user"><span>sign in</span></Link>
                               
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="input-group px-3 mt-3"> 
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Primer nombre" 
                                            aria-label="Username" 
                                            value={input.name} 
                                            name="name"
                                            onChange={handleChange} required
                                            /> 
                                            <span>
                                            </span> 
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Ultimo nombre" 
                                            value={input.lastName} 
                                            name="lastName"
                                            onChange={handleChange} required aria-label="Server"
                                            /> 
                                        </div>
                                    
                                    <div className="mt-3 px-3"> 
                                        <input 
                                        className="form-control" 
                                        type="text" placeholder="nombre de usuario" 
                                        value={input.username}
                                        name="username"
                                        onChange={handleChange} required
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

                                </div>
                               
                            
                                
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
                <button type='submit' onSubmit={(e) => User(e,input)}>Crear usuario</button>
            </form>
            

        </div>
    )
}
export default CreateUser;