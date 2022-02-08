import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, setCartOn } from "../actions/actionProducts.js";
import { useEffect } from "react";
import { useParams } from "react-router";
import Reviews from "../components/Reviews.jsx"
import { addToCart } from '../actions/actionProducts.js'
import swal from 'sweetalert';

export default function Details() {

  const dispatch = useDispatch()
  const productId = useSelector((state) => state.firstRed.productId)
  const cart = useSelector((state) => state.firstRed.cart)
  const formato = new Intl.NumberFormat('de-DE', {
    // style: 'currency',
    // currency: 'USD',
    // minimumFractionDigits: 3,
  })

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addToCart(Number(productId.id)))
    window.localStorage.setItem('carrito', JSON.stringify(cart))
    dispatch(setCartOn())
    swal("Agregado al carrito!", {
      buttons: false,
      icon: 'success',
      timer: 1500,
    });
  }

  const { id } = useParams();


  // console.log('el carrito', cart)

  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch,id])


  useEffect(() =>
    // window.localStorage.getItem('carrito') ? window.localStorage.getItem('carrito') :   
    window.localStorage.setItem('carrito', JSON.stringify(cart))
    , [cart])

  return (<>
    <div className="container">
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <br />
          <br />
            <h2 className="featurette-heading">{productId.name}</h2>
            <hr />
          <h3 className="text-info">
            <b>Precio:</b> ${formato.format(productId.price)}
          </h3>
          <br />
            <h3>Descripción</h3>
          <p className="lead">{productId.description}</p>
          {productId.model !== null ? (
          <p>
            <b>Model:</b> {Array.isArray(productId.model) && productId.model.map((e) => <span key={e}> {e}. </span>)}
          </p>) : null}
          <p>
            <b>Color:</b>{Array.isArray(productId.color) && productId.color.map((e) => <span key={e}> {e}. </span>)}
          </p>
          {productId.storage !== null ? (
          <p>
            <b>Almacenamiento:</b> {Array.isArray(productId.storage) && productId.storage.map((e) => <span key={e}> {e}. </span>)}
          </p>) : null}
          {productId.ram !== null ? (
          <p>
            <b>Ram:</b> {Array.isArray(productId.ram) && productId.ram.map((e) => <span key={e}> {e}. </span>)}
          </p>) : null}
          {productId.stock > 0 ? (
          <p>
            <b>Stock:</b> {productId.stock} 
          </p>) 
            : (
          <p>
            <b>Stock:</b> Exhausted 
          </p>
          )}
          {/* {productId.stock > 0 ? (<label><b>Cantidad:</b> <input type="number" min="1" max={productId.stock} placeholder="1" /></label>) : null} */}
          {/* boton el svg es la imagen del carrito */}
          {productId.stock > 0 ? <div>
              {cart.some((c) => productId.name === c.name) ? 
              <div className="alert alert-info" role="alert">
              Agregado al carrito
              </div>
              :
              <button style={{margin: "10px 0px"}} 
              type="button"  
              className="btn btn-outline-info rounded-pill btn-lg" 
              onClick={(e) => handleClick(e)}>
                <i class="fas fa-cart-plus"></i>  
                 Añadir al carrito
                </button>


              }
          </div> : <div><h5>Sin Stock</h5></div>}
          {/*segundo boton tomado de piwo */}
          {/*tercer boton */}
        </div>
        {/* en este div se ingresa la img */}
        <div className="col-md-5 order-md-1">
          <img alt="not found"className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="940px" height="1112px" src={productId.image} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
        </div>
      </div>
      <hr className="featurette-divider" />
    </div>

    {/* aca estan las reviews*/}
    <Reviews id={id} />
  </>
  )
}