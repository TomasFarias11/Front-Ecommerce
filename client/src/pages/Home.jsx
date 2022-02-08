import React from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardCarrusel from "../components/CardCarrusel.jsx";
import {getProductByCategory, getOrderUser, setCart, editOrder, createOrder} from '../actions/actionProducts.js'
import {getUserId} from '../actions/actionUser.js'
import { useNavigate, useLocation } from 'react-router-dom';
import estilos from '../css/Home.module.css';
import CarrouselMain from "../components/CarrouselMain.jsx"


export default function Home () {

    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const products = useSelector((state) => state.firstRed.productsByCategory);
    const cart = useSelector((state) => state.firstRed.cart);
    const users = useSelector((state)=> state.secondRed.userData);
    const order = useSelector((state) => state.firstRed.order)
    
    const orderAlert = useSelector((state) => state.firstRed.orderAlert)
    // console.log('esta es laorden', order)
    

    useEffect(()=>{
        cart.length > JSON.parse(window.localStorage.getItem('carrito')).length || cart.length < JSON.parse(window.localStorage.getItem('carrito')).length? window.localStorage.setItem('carrito', JSON.stringify(cart)) : window.localStorage.setItem('carrito', JSON.stringify(cart))
        if (cart.length === 0 && JSON.parse(window.localStorage.getItem('carrito').length > 0)) {
            setCart(JSON.parse(window.localStorage.getItem('carrito')))
        }
    },[cart])

    const h = useLocation()
    console.log('WTH?', h)

    useEffect(()=> {  
        products > 0 ? window.localStorage.setItem('productos',JSON.stringify(products)) : window.localStorage.setItem('productos',JSON.stringify([]))
        if (users.length !== 0) {
            dispatch(getOrderUser(users.id))
        }
    })

   
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getProductByCategory(e.target.value))
        Navigate(`/category/${e.target.value}`)
    }

    return (
        <div >
        <div>
          <CarrouselMain/>
        </div>
        <div className="container" >
            <CardCarrusel/>
        </div>
    <div className="container" style={{display: "flex", flexDirection: "column"  }} >
        <div className="row" style={{padding:20}}>
            <div className="col col-lg-4" >
                <div className={estilos.styleCards}>
                <img src="https://i.postimg.cc/RF0RDbPT/iphone.png" className="img-fluid" alt="Fissure in Sandstone" />
                    <div className="card-body">
                    <h2 className="card-title"><strong>iPhone</strong> </h2>
                        <p className="card-text">Un salto al siguiente nivel.</p>
                        <div className={estilos.buttonCat}>
                            <button value='iPhone' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver más  <i className="fas fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4">
                <div className={estilos.styleCards}>
                    <img src="https://i.postimg.cc/KzsNSrwh/ipad.png" className="img-fluid" alt="Fissure in Sandstone"/>
                    <div className="card-body">
                        <h2 className="card-title"><strong>iPad</strong> </h2>
                        <p className="card-text">Tu mundo a todo color.</p>
                        <button value='iPad' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver más  <i className="fas fa-angle-right"></i> </button>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4">
                <div className={estilos.styleCards}>
                    <img src="https://i.postimg.cc/MZnkcsWR/watch.png" className="img-fluid" alt="Fissure in Sandstone" />
                    <div className="card-body">
                    <h2 className="card-title"><strong>Watch</strong> </h2>
                        <p className="card-text">Un futuro más saludable en tu muñeca.</p>
                        <button value='Watch' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver más  <i className="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
            </div>
        
        <div className="row" style={{padding:10}}>
            <div className="col col-lg-4">
                <div className={estilos.styleCards}>
                    <img src="https://i.postimg.cc/TPfQrPgF/airpods.png" className="img-fluid" alt="Fissure in Sandstone" />
                    <div className="card-body">
                    <h2 className="card-title"><strong>AirPods</strong> </h2>
                        <p className="card-text">Musica de calidad para tus oidos.</p>
                        <button value='AirPods' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver más  <i className="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4">
                <div className={estilos.styleCards}>
                    <img src="https://i.postimg.cc/nL22Tt1z/mac.png" className="img-fluid" alt="Fissure in Sandstone" />
                    <div className="card-body">
                    <h2 className="card-title"><strong>MacBook</strong> </h2>
                        <p className="card-text">Velocidad para llevar a todas partes.</p>
                        <button value='Mac' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver más  <i className="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4">
                <div className={estilos.styleCards}>
                    <img src="https://i.postimg.cc/SstpBCVB/tv.png" className="img-fluid" alt="Fissure in Sandstone" />
                    <div className="card-body">
                    <h2 className="card-title"><strong>TV & Home</strong> </h2>
                        <p className="card-text">El futuro llegó a casa.</p>
                        <button value='TV & Home' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver más  <i className="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}
