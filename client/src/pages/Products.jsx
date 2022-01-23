import React from "react";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { orderAZ, orderZA, minPrice, maxPrice } from '../actions/actionProducts.js'
import { Link } from "react-router-dom";
import { useState } from "react";
import { connect } from 'react-redux'

const Products = ({reducerProducts, orderAZ, orderZA, minPrice, maxPrice}) => {

    const dispatch = useDispatch();
    const productsx = reducerProducts

    /* const [a,setA] = useState([])
    useEffect(()=>{
        setA(...a,products)
    },[products])


    const c =()=>{
        const d = a.sort((prev, post) => {
            if (prev.name < post.name) return -1;
            else if (prev.name > post.name) return 1;
            else return 0
        });
        setA(...a,[])
        setA(...a,d)
    } */
    // useEffect(() => 
    //     dispatch(getProductByCategory(category))
    // ,[])

    console.log('estos son los productos', productsx)
    //console.log('esto es a',a)
    console.log('esto es b',reducerProducts)

    return (
        
        <div className="row">
            <div className="col-lg-3">

                <div className="container-sm " style={{ padding: 20 } }>   
                    <div >

                        {/* <div style={{width:250}} >
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
                        </div> */}

                        <div className="dropdown">
                        <button type="button" class="btn btn-outline-secondary" onClick={()=>orderAZ()}>Orden  A...Z</button>
                        </div>
                        <br/>
                        <div className="dropdown">
                        <button type="button" class="btn btn-outline-secondary" onClick={()=>orderZA()}>Orden  Z...A</button>
                        </div>
                        <br/>
                        <div className="dropdown">
                        <button type="button" class="btn btn-outline-secondary" onClick={()=>minPrice()}>Precio min...max</button>
                        </div>
                        <br/>
                        <div className="dropdown">
                        <button type="button" class="btn btn-outline-secondary" onClick={()=>maxPrice()}>Precio max...min</button>
                        </div>

                    </div>
                    


                </div>
            </div>
{/* aqui arranca la prueba */}
            {/* <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid"/>
                <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
            </div>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" class="btn btn-primary">Button</a>
            </div>
            </div> */}
{/* esto es lo que funciona */}
                <div className=" card col-lg-8">
                    <div className="container-sm bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{ padding: 20 } } >
                        {/* <h1>{products? products[0].name : "iPhone"}</h1> */}
                        <div className="row row-cols-0 row-cols-md-3 g-5 mask" Style="background-color: #FAFAFA"    >
                            {
                                reducerProducts.map(e =>
                                    <div className="col" key={e.id}>
                                        <div className="card" >
                                            <img src={e.image !== 'not found' ? e.image : "https://i.postimg.cc/SK600jXG/OIP.jpg"} className="card-img-top img-fluid" alt={e.image} style={{padding:"30 0", height: "300px"}} />
                                            <div className="card-body">
                                                <h5 className="card-title">{e.name}</h5>
                                                <p className="card-text">{e.category}  ${e.price}</p>
                                                <button className="btn btn-outline-secondary rounded-pill"><Link to={`/products/details/${e.id}`}>ver más...</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }


                        </div>
                    </div>
                </div>


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        reducerProducts: state.firstRed.products,
    };
};

const wrapper = connect(mapStateToProps,{ orderAZ, orderZA, minPrice, maxPrice });
const component = wrapper(Products);

export default component;