import React from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../actions/actionProducts.js'

export default function Home () {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.firstRed.products)

    useEffect(() => 
        dispatch(getProducts())
    ,[])

    console.log('estos son los productos', products)

    return (
        <h1>Aca va el home con las CATEGORIAS, no los PRODUCTOS</h1>
    )
}