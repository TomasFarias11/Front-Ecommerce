import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, getProducts, setCartOn, setCart, editOrder} from '../actions/actionProducts.js'
import {Link} from "react-router-dom";
const CheckOut = () =>{

    const [ items, setItems] = useState([]);

    const order = useSelector((state) => state.firstRed.order)
    console.log('order', order[0].carrito[0].name)

    var item = [];

    const createItem = (order)=>{
        
         order[0].carrito.map(e=>item.push(
            {
            id:e.id,
            title: e.name,
            currency_id: "ARS",
            description: e.description,
            category_id: e.idCategory,
            quantity: e.quantity,
            unit_price: e.price
            }))
            return item
    }
    

    useEffect(()=>{
        createItem(order)
        setItems(...items,item)
        console.log('ITEMS',items)
    },[]);
    


    return(
        <div>
            {order[0].carrito.map(e=>
                <ul>
                    <li>
                        <h6>{e.id}</h6>
                    </li>
                    <li>
                        <h6>{e.name}</h6>
                    </li>
                    <li>
                        <h6>{e.description}</h6>
                    </li>
                    <li>
                        <h6>{e.idCategory}</h6>
                    </li>
                    <li>
                        <h6>{e.quantity}</h6>
                    </li>
                    <li>
                        <h6>{e.price}</h6>
                    </li>
                    <br/>                
                </ul>
                

                
            )}
        </div>
    )
}
    
export default CheckOut;