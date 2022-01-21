import React from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductByCategory} from '../actions/actionProducts.js'

export default function Products (category) {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.firstRed.products)

    // useEffect(() => 
    //     dispatch(getProductByCategory(category))
    // ,[])

    console.log('estos son los productos', products)

    return (
        <h1>Aca van los productos</h1>
    )
}