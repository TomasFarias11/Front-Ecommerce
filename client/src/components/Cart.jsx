import React from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {delAllCart, setCartOff} from '../actions/actionProducts.js'
import { useNavigate } from 'react-router-dom';
import CartCard from './CartCard.jsx'
import swal from 'sweetalert';

export default function Cart () {
    
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const cart = useSelector((state) => state.firstRed.cart)
    const cartNav = useSelector((state) => state.firstRed.cartNav)
    const user = JSON.parse(window.localStorage.getItem('usuario'))
    let order = useSelector((state) => state.firstRed.order)
    order = order.filter(e => e.status === 'open')

    let total = 0;
    let totalQuantity = 0
    cart.length > 0 && cart.map((e) => {
        total = total + (e.price * e.quantity);
        totalQuantity = Number(totalQuantity) + Number(e.quantity)
    })
    const formato = new Intl.NumberFormat('de-DE', {
        // style: 'currency',
        // currency: 'USD',
        // minimumFractionDigits: 3,
    })


    

    const handleDeleteAll = (e) =>  {
        e.preventDefault()
        if (user.admin === true) {
            swal("El admin no puede realizar dicha accion!", {
                buttons: false,
                icon: 'error',
                timer: 2000,
              });
        } else {

            dispatch(delAllCart())
            window.localStorage.setItem('carrito', JSON.stringify([]))
            swal("Carrito vaciado con exito!", {
                buttons: false,
                icon: 'success',
                timer: 2000,
            });
            dispatch(setCartOff())
        }
    }

    useEffect(() => {
        if (cart.length === 0) {
            dispatch(setCartOff())
        }
    },[cart])

    const handleCheck = (e) => {
        e.preventDefault()
        if (!user.username) {
            swal("Debes iniciar sesion primero!", {
                buttons: false,
                icon: 'error',
                timer: 2000,
              });
        } else {
            window.localStorage.setItem('order', JSON.stringify(order))
            dispatch(setCartOff())
            Navigate("/mercadopago")
        }
    }

    return (
            
        <div className = {cartNav === false ? "row animate__animated animate__slideOutRight" : "row animate__animated animate__slideInRight"} style={{position: 'absolute', right: '12px', top: '95px', background: '#fff', overflowY: "scroll", height: '90.5vh'}}>
                <div className="container-sm">
                    <div>
                        <div>
                            <button onClick={() => dispatch(setCartOff())} className="btn btn-info text-white" style={{position: 'relative', left: 0, top: 0,margin: '5px 0 5px'}}>Ocultar Carrito</button>
                        </div>
                        {cart ? cart?.map((e) => {
                            return (
                                <div key = {e.id}style={{margin: '5px',}}>
                                <hr />
                                <CartCard 
                                key = {e.id}
                                id = {e.id}
                                name = {e.name}
                                price = {e.price}
                                image = {e.image}
                                quantity = {e.quantity}
                                stock = {e.stock}
                                />
                            </div>
                            )
                        }): <h4>NO HAY NADA EN EL CARRITO</h4>}     
                    </div>
                    <div className='carrito_footer'>
                        <hr />
                        <div className="container-sm d-flex justify-content-center" style={{ padding:20, paddingTop:0 }}> 
                            <div className="badge fs-4 bg-info text-wrap" style={{ width: "20rem" }}>
                                <h3>Subtotal =  ${formato.format(total)}</h3>
                            </div>
                        </div>
                        <div className='carrito_izq'>
                            <div className="d-flex justify-content-center" style={{paddingBottom:40, }}>
                                <hr />
                                <div className="d-flex justify-content-center">
                                    <button onClick={(e) => handleCheck(e)} className='btn btn-success' style={{margin: '5px '}}>Realizar Pedido</button>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button onClick = {(e) => handleDeleteAll(e)}className='btn btn-danger' style={{margin: '5px '}}>Vaciar Carrito</button>
                                </div>
                                <hr />                               
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}