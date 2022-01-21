import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/actionProducts.js'

export default function Products() {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.firstRed.products)

    useEffect(() =>
        dispatch(getProducts())
        , [])

    console.log('estos son los productos', products)

    return (

        <div className="container">   
            <div className="" style={{
                position: "fixed",
                top: 60,
                left: 47,
                height: "70rem",
                borderRadius: 10,
                padding: 20,
                background: "rgb(232 232 242)",
            }}>

                <div style={{width:250}} >
                    <h4>inicio</h4> 
                    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">

                    <div class="btn-group" style={{flexDirection: "column"}} role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" style={{margin:10}}  data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </button>
                        <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" style={{margin:10}}  data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </button>
                        <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" style={{margin:10}}  data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </button>
                        <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" style={{margin:10}}  data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                        </ul>
                    </div>
                    </div>
                    
                    <h4>filtrados</h4> 
                    <h5></h5>
                </div>


            </div>


            <div className="container" style={{ marginTop: 60, padding: 100 } } >
                {/* <h1>{products? products[0].name : "iPhone"}</h1> */}
                <div className="row row-cols-0 row-cols-md-3 g-5"   >
                    {
                        products.map(e =>
                            <div className="col" key={e.id}>
                                <div className="card" >
                                    <img src="https://i.postimg.cc/SK600jXG/OIP.jpg" className="card-img-top" alt={e.image} style={{padding:"30 0"}} />
                                    <div className="card-body">
                                        <h5 className="card-title">{e.name}</h5>
                                        <p className="card-text">{e.category}  ${e.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>


        </div>
    )
}
