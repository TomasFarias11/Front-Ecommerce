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
          <br />
            <h3>Descripcion</h3>
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
          <p>
            <b>Precio:</b> ${formato.format(productId.price)}
          </p>
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
              <div className="alert alert-warning" role="alert">
              Agregado al carrito
              </div>
              :
              <button type="submit" className="btn btn-primary" onClick={(e) => handleClick(e)} style={{ margin: "0 40px 13px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                <span>  Añadir al carrito <span>$<b>{formato.format(productId.price)}</b></span></span>
              </button>
              }
          </div> : <div><h5>Sin Stock</h5></div>}
          {/*segundo boton tomado de piwo */}
          {/*tercer boton */}
        </div>
        {/* en este div se ingresa la img */}
        <div className="col-md-5 order-md-1">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="940px" height="1112px" src={productId.image} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
        </div>
      </div>
      <hr className="featurette-divider" />
    </div>

    {/* aca estan las reviews*/}
    <Reviews id={id} />
  </>
  )
}