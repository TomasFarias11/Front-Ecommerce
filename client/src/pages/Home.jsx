import React from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Footer from "../components/Footer.jsx";
import MuestraProduct from "../components/MuestraProduct.jsx";
import {getProducts, getProductByCategory} from '../actions/actionProducts.js'
import { useNavigate } from 'react-router-dom';
import estilos from '../css/Home.module.css';

export default function Home () {

    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const products = useSelector((state) => state.firstRed.products);

    useEffect(() => 
        dispatch(getProducts())
    ,[])

    console.log('estos son los productos', products)

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getProductByCategory(e.target.value))
        Navigate("/products/category")
    }

    return (
        <div>
        <div className="row">
            <div className="row" style={{padding:14}}>
                <div className="col col-lg-4" >
                    <div className={estilos.styleCards}>

                    <img src="https://i.blogs.es/da8cbb/iphone-13-pro/1366_2000.jpg" className="card-img-top" alt="Fissure in Sandstone" height='350px'/>
                        <div className="card-body">
                            <h5 className="card-title">iPhone</h5>
                            <p className="card-text">Un salto al siguiente nivel.</p>
                            <div className={estilos.buttonCat}>
                                <button value='iphone' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver mas...</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4">
                    <div className={estilos.styleCards}>
                        <img src="https://photos5.appleinsider.com/gallery/30181-49348-four-ipad-choices-xl.jpg" className="card-img-top" alt="Fissure in Sandstone" height='350px'/>
                        <div className="card-body">
                            <h5 className="card-title">iPad</h5>
                            <p className="card-text">Tu mundo a todo color.</p>
                            <button value='ipad' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver mas...</button>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4">
                    <div className={estilos.styleCards}>
                        <img src="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple_announces-watch-se_09152020.jpg.landing-big_2x.jpg" className="card-img-top" alt="Fissure in Sandstone" height='350px'/>
                        <div className="card-body">
                            <h5 className="card-title">Apple Watch</h5>
                            <p className="card-text">Salud solo en tu muñeca.</p>
                            <button value='watch' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver mas...</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row" style={{padding:14}}>
                <div className="col col-lg-4">
                    <div className={estilos.styleCards}>
                        <img src="https://cdn.ipadizate.com/2020/12/airpods-max-en-colores.jpg" className="card-img-top" alt="Fissure in Sandstone" height='350px'/>
                        <div className="card-body">
                            <h5 className="card-title">AirPods</h5>
                            <p className="card-text">Musica de calidad para tus oidos.</p>
                            <button value='airpods' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver mas...</button>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4">
                    <div className={estilos.styleCards}>
                        <img src="https://www.apple.com/v/mac/home/bj/images/meta/mac__bfa414svyuc2_og.png" className="card-img-top" alt="Fissure in Sandstone" height='350px'/>
                        <div className="card-body">
                            <h5 className="card-title">Macbook</h5>
                            <p className="card-text">Velocidad para llevar a todas partes.</p>
                            <button value='macbook' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver mas...</button>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4">
                    <div className={estilos.styleCards}>
                        <img src="https://ar.oneclickstore.com/wp-content/uploads/2021/11/Apple_TV_4K_PDP_Image_Position-1_USBC_LAES_R1_v1.jpg" className="card-img-top" alt="Fissure in Sandstone" height='350px'/>
                        <div className="card-body">
                            <h5 className="card-title">Tv and Home</h5>
                            <p className="card-text">Streaming en 4K.</p>
                            <button value='tv' className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Ver mas...</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <MuestraProduct/> */}
            </div>
        </div>
    )
}