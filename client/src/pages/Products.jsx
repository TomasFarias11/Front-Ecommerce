import React from "react";
import { orderAZ, orderZA, minPrice, maxPrice, setProducts, addToCart, setCartOn } from '../actions/actionProducts.js'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import swal from 'sweetalert';


const Products = ({products, orderAZ, orderZA, minPrice, maxPrice, setProducts, addToCart, setCartOn}) => {

    // const dispatch = useDispatch()
    const cart = useSelector((state) => state.firstRed.cart)
    console.log('este es el carrito', cart);
    
    useEffect(()=>{
        products.length < JSON.parse(window.localStorage.getItem('productos')).length && products.length ===0 ? 
        setProducts(JSON.parse(window.localStorage.getItem('productos'))) :
        JSON.parse(window.localStorage.getItem('productos'))
    },[products])

    const formato = new Intl.NumberFormat('de-DE', {
        // style: 'currency',
        // currency: 'USD',
        // minimumFractionDigits: 3,
    })

    useEffect(()=>{
        const data = window.localStorage.getItem('productos')
        if (data){
            window.localStorage.setItem('productos', data)
        }
    },[])
    
    useEffect(()=> {
        window.localStorage.setItem('productos',JSON.stringify(products))
    })

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        addToCart(e.target.value)
        window.localStorage.setItem('carrito', JSON.stringify(cart))
        setCartOn()
        swal("Agregado al carrito!", {
            buttons: false,
            icon: 'success',
            timer: 1500,
        });
      }
    
    return (
        
        <div className="row">
            <div className="col-lg-2">
                <div className="container-sm" style={{ padding: 20 } }>   
                    <div >
                        <div className="dropdown">
                        <button type="button" className="btn btn-outline-secondary" onClick={()=>orderAZ()}>Orden  A...Z</button>
                        </div>
                        <br/>
                        <div className="dropdown">
                        <button type="button" className="btn btn-outline-secondary" onClick={()=>orderZA()}>Orden  Z...A</button>
                        </div>
                        <br/>
                        <div className="dropdown">
                        <button type="button" className="btn btn-outline-secondary" onClick={()=>minPrice()}>Precio min...max</button>
                        </div>
                        <br/>
                        <div className="dropdown">
                        <button type="button" className="btn btn-outline-secondary" onClick={()=>maxPrice()}>Precio max...min</button>
                        </div>
                    </div>
                </div>
            </div>
                <div className=" card col-lg-9">
                    <div className="container-sm bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{ padding: 20 } } >
                        <div className="row row-cols-0 row-cols-md-3 g-5 mask animate__animated animate__bounceIn" Style="background-color: #FAFAFA"    >
                            {
                                products.map(e =>
                                    <div className="col" key={e.id}>
                                        <div className="card animate__animated animate__bounceIn" >
                                            <img src={e.image !== 'not found' ? e.image : "https://i.postimg.cc/SK600jXG/OIP.jpg"} className="card-img-top img-fluid" alt={e.image} style={{padding:"20 0", height: "340px", width: "340px"}} />
                                            <div className="card-body">
                                                <h5 className="card-title">{e.name}</h5>
                                                <p className="card-text">{e.category}  ${formato.format(e.price)}</p>
                                                <Link to={`/details/${e.id}`}>
                                                    <button className="btn btn-outline-secondary rounded-pill">Ver más...</button>
                                                </Link>
                                                <div>
                                                    {console.log('products', products)}
                                                    {cart.some((c) => e.id === c.id) ? 
                                                    <div className="alert alert-warning" role="alert">
                                                        Agregado al carrito
                                                    </div>
                                                    : 
                                                    <button style={{margin: "10px 0px"}} type="button" value={e.id} className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}>Añadir al carrito</button>
                                                    }
                                                </div>
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
        products: state.firstRed.products,
    };
};

const wrapper = connect(mapStateToProps,{ orderAZ, orderZA, minPrice, maxPrice, setProducts, addToCart, setCartOn });
const component = wrapper(Products);

export default component;