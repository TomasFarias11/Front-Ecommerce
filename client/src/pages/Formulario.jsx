import React from "react";
import { useState } from "react";
import { postUserCreate } from '../actions/actionProducts'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function validate(input) {
    let errors = {}
    if (!input.name) {
        errors.name = "se requiere un nombre"
    }
    if (!input.life) {
        errors.lastName = "Se requiere apellido"
    }
    if (!input.defense) {
        errors.email = "Se requiere email"
    }

    return errors;
}

const Formularios = () => {
    const dispatch = useDispatch();

    const [error, setError] = useState('')

    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
        lastName: "",
        image: "",
        address: ""

    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postUserCreate(input))
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

    return (
        <div>

            <form onSubmit={(e) => handleSubmit(e)} style={{height: '55rem'}} >
                <div>
                    <div>
                        <div>
                            <h4>Crear cuenta</h4>
                            <div>
                                <span>
                                    Already have an account?
                                </span>
                                <Link to="/login"><span>sign in</span></Link>

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
                                                onChange={(e) => handleChange(e)}
                                                required={true}
                                            />
                                            <span>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Ultimo nombre"
                                                value={input.lastName}
                                                name="lastName"
                                                onChange={(e) => handleChange(e)} required={true} aria-label="Server"
                                            />
                                        </div>

                                        <div className="mt-3 px-3">
                                            <input
                                                className="form-control"
                                                type="text" placeholder="nombre de usuario"
                                                value={input.username}
                                                name="username"
                                                onChange={(e) => handleChange(e)} required={true}
                                            />
                                        </div>
                                        <div className="mt-3 px-3">
                                            <input type='password'
                                                className="form-control"
                                                placeholder="Password"
                                                value={input.password}
                                                name="password"
                                                onChange={handleChange} required={true}
                                            />
                                        </div>
                                        <div className="mt-3 px-3">
                                            <input
                                                className="form-control"
                                                type="email"
                                                placeholder="E-mail"
                                                value={input.email}
                                                name="email"
                                                onChange={handleChange} required={true}
                                            />
                                        </div>
                                        <div className="mt-3 px-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Dirección residencia"
                                                value={input.address}
                                                name="address"
                                                onChange={handleChange} required={true}
                                            />
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <button type='submit' className="btn " >Crear usuario</button>
            </form>


        </div>
    )
}
export default Formularios;