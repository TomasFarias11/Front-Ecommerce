import React from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, delCart, quantity_item, setCartOff} from '../actions/actionProducts.js'
import { useNavigate } from 'react-router-dom';
import '../css/CartCard.module.css'
import swal from 'sweetalert';

export default function CartCard ({id, name, price, image, quantity}) {

    const dispatch = useDispatch()
    const cartStorage = window.localStorage.getItem('carrito')
    const cart = useSelector((state) => state.firstRed.cart)
    const formato = new Intl.NumberFormat('de-DE', {
        // style: 'currency',
        // currency: 'USD',
        // minimumFractionDigits: 3,
    })

    const handleOnClick = (e) => {
        e.preventDefault();
        dispatch(delCart(id))
        window.localStorage.setItem('carrito', JSON.stringify(cart))
        // dispatch(setCartOff())
        swal("Articulo eliminado con exito!", {
            buttons: false,
            icon: 'success',
            timer: 2000,
          });

    }

    // useEffect(()=>{
    //     cart.length < JSON.parse(window.localStorage.getItem('carrito')).length ? window.localStorage.setItem('carrito', JSON.stringify(cart)) : window.localStorage.getItem('carrito')
    // },[cart])

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
                            <button className="button-X" onClick={(e) => handleOnClick(e)}><span> X </span></button>
                        </div>
                        <div className="cart-imagen">
                        <img src={image} alt="Not found" height="100px"/>
                        </div>
                        <h4 className="name-cart">{name}</h4>        
                        <div className="quantity">
                        {/* <h3 className="price">US{formato.format(price)}</h3> */}
                        <h5>${formato.format(price)} x <input type="number" min='1' max='30' value={quantity} onChange={handleQuantity} className='price'/>u = ${formato.format((price * quantity))}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}