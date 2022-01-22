import React from "react";
// import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {getProductByCategory} from '../actions/actionProducts.js'

export default function Products (category) {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.firstRed.products)
    console.log('estos son los productos', products)

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
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <br/>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <br/>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
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
                                products.map(e =>
                                    <div className="col" key={e.id}>
                                        <div className="card" >
                                            <img src={e.image !== 'not found' ? e.image : "https://i.postimg.cc/SK600jXG/OIP.jpg"} className="card-img-top img-fluid" alt={e.image} style={{padding:"30 0", height: "300px"}} />
                                            <div className="card-body">
                                                <h5 className="card-title">{e.name}</h5>
                                                <p className="card-text">{e.category}  ${e.price}</p>
                                                <button className="btn btn-outline-secondary rounded-pill">ver mas..</button>
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
