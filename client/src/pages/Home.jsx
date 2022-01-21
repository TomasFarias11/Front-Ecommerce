import React from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../actions/actionProducts.js'
import Footer from "../components/Footer.jsx";
import MuestraProduct from "../components/MuestraProduct.jsx";

export default function Home () {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.firstRed.products)

    useEffect(() => 
        dispatch(getProducts())
    ,[])

    console.log('estos son los productos', products)

    return (
        <div>
            <h1>Aca va el home con las CATEGORIAS, no los PRODUCTOS</h1>
            <MuestraProduct/>
            <Footer/>
        </div>
        
    )
}