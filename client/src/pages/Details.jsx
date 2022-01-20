import React from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProductById} from "../actions/actionProducts.js";
import {useEffect} from "react";

export default function Details ({props}) {
    const dispatch = useDispatch()
    const productId = useSelector((state) => state.firstRed.productId)


    useEffect(() => {
        dispatch(getProductById(props))
    },[dispatch])
    
    return (
        <div>
            <h2>aca van los detalles</h2>
            <Link to = "/products">
                <button>Home</button>
            </Link>
        </div>
    )
}