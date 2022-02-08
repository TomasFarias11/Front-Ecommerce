import React from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { delCart, quantity_item } from '../actions/actionProducts.js'
// import { useNavigate } from 'react-router-dom';
import '../css/CartCard.module.css'
import swal from 'sweetalert';

export default function CartCard ({id, name, price, image, quantity, stock}) {

    const dispatch = useDispatch()
    // const cartStorage = window.localStorage.getItem('carrito')
    const cart = useSelector((state) => state.firstRed.cart)
    const user = JSON.parse(window.localStorage.getItem('usuario'))
    const formato = new Intl.NumberFormat('de-DE', {
        // style: 'currency',
        // currency: 'USD',
        // minimumFractionDigits: 3,
    })

    const handleOnClick = (e) => {
        e.preventDefault();
        if (user.admin === true) {
            swal("El admin no puede realizar dicha accion!", {
                buttons: false,
                icon: 'error',
                timer: 2000,
              });
        } else {
            dispatch(delCart(Number(id)))
            window.localStorage.setItem('carrito', JSON.stringify(cart))
            swal("Articulo eliminado con exito!", {
                buttons: false,
                icon: 'success',
                timer: 2000,
            });
        }
    }

    useEffect(()=>{
        cart.length > JSON.parse(window.localStorage.getItem('carrito')).length || cart.length < JSON.parse(window.localStorage.getItem('carrito')).length? window.localStorage.setItem('carrito', JSON.stringify(cart)) : window.localStorage.getItem('carrito')
    },[cart])



    const handleQuantity= (e) => {
        e.preventDefault()
        dispatch(quantity_item({id, cantidad: e.target.value}))
      }

    return (
        <div className="cart-cont">
            <div  className="order">
                <div className="shopping-cart" >
                    <div className="item"> 
                        <div>
                            <button className="btn btn-outline-danger btn-sm" onClick={(e) => handleOnClick(e)}><i className="fas fa-trash-alt"></i></button>
                        </div>
                        <div className="cart-imagen">
                        <img src={image} alt="Not found" height="100px"/>
                        </div>
                        <h4 className="name-cart">{name}</h4>        
                        <div className="quantity">
                        {/* <h3 className="price">US{formato.format(price)}</h3> */}
                        <h6>${formato.format(price)} x <input type="number" min='1' max={stock} value={quantity} onChange={handleQuantity} className='price'/>u = ${formato.format((price * quantity))}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}