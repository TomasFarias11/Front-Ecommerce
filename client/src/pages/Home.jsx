import React from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts, getProductByCategory} from '../actions/actionProducts.js'
import { useNavigate } from 'react-router-dom';

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

        <h1>Aca va el home con las CATEGORIAS, no los PRODUCTOS</h1>

        <input type="button" value="iphone" onClick={(e) => handleClick(e)}/>
        <input type="button" value="ipad" onClick={(e) => handleClick(e)}/>
        <input type="button" value="watch" onClick={(e) => handleClick(e)}/>
        <input type="button" value="airpods" onClick={(e) => handleClick(e)}/>
        <input type="button" value="macbook" onClick={(e) => handleClick(e)}/>
        <input type="button" value="tv" onClick={(e) => handleClick(e)}/>
        </div>
    )
}