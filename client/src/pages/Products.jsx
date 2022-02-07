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
    // console.log('este es el carrito', cart);
    
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
        addToCart(Number(e.target.value))
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
                <div className="container-sm d-flex justify-content-center" style={{ padding:20, paddingTop:0 }}> 
                    <div className="badge fs-4 bg-info text-wrap" style={{ width: "20rem" }}>
                        Ordenar por
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{ padding:20, paddingTop:0 }}>   
                    <div >
                        <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-secondary" onClick={()=>orderAZ()}>Nombre  <i class="fas fa-sort-alpha-down"></i></button>
                        </div>
                        <br/>
                        <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-secondary" onClick={()=>orderZA()}>Nombre  <i class="fas fa-sort-alpha-up"></i></button>
                        </div>
                        <br/>
                        <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-secondary" onClick={()=>minPrice()}>Precio <i class="fas fa-sort-numeric-down"></i></button>
                        </div>
                        <br/>
                        <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-secondary" onClick={()=>maxPrice()}>Precio <i class="fas fa-sort-numeric-up"></i></button>
                        </div>
                    </div>
                </div>

            </div>
                <div className=" card col-lg-9">
                    <div className="container-sm bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{ padding: 20 } } >
                        <div className="row row-cols-0 mt-0 row-cols-md-3 g-5 mask animate__animated animate__bounceIn" style={{backgroundColor: "#fff"}}    >
                            {
                                products.length < 0 ? <div><h1>Producto sin Stock</h1></div> :
                                products.filter(p=>p.stock > 0).map(e =>
                                    <div className="col mt-1 mb-3" key={e.id}>
                                        <div className="card animate__animated animate__bounceIn" >
                                            <Link to={`/details/${e.id}`}>
                                                <img src={e.image !== 'not found' ? e.image : "https://i.postimg.cc/SK600jXG/OIP.jpg"} className="img-fluid" alt="product"  />
                                            </Link>
                                            <div className="card-body">
                                                <Link style={{ textDecoration: "none", color: "black" }} to={`/details/${e.id}`}>
                                                    <h5 className="card-title"><strong>{e.name}</strong></h5>
                                                </Link>
                                                <p className="card-text text-info"><strong>{e.category}  $ {formato.format(e.price)}</strong> </p>
                                                <div>
                                                    {/* {console.log('products', products)} */}
                                                    {cart.some((c) => e.id === c.id) ? 
                                                    <div className="alert alert-info" role="alert">
                                                        Agregado al carrito
                                                    </div>
                                                    : 
                                                    <div className="d-flex justify-content-center">
                                                    <button style={{margin: "10px 0px"}} type="button" value={e.id} className="btn btn-outline-secondary rounded-pill" onClick={(e) => handleClick(e)}><i class="fas fa-cart-plus"></i> Añadir al carrito</button>
                                                    </div>
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