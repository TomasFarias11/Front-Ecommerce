import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, getProducts, setCartOn, setCart, editOrder} from '../actions/actionProducts.js'
import {Link} from "react-router-dom";
import swal from 'sweetalert';
import '../css/Carrousel.css'

const CardCarrusel = () =>{

    useEffect(() => 
        dispatch(getProducts())        
    ,[])

    const allProducts = useSelector((state) => state.firstRed.products) // me traigo todo los productos
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.firstRed.cart)
    const order = useSelector((state) => state.firstRed.order)
    const user = useSelector((state) => state.secondRed.userData)
    const formato = new Intl.NumberFormat('de-DE', {
        // style: 'currency',
        // currency: 'USD',
        // minimumFractionDigits: 3,
    })

    const[currentPage, setCurrentPage]=useState(1);
	const[productsPerPage, setProductsPerPage]=useState(4);
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const filtro=allProducts.filter(p=>p.idCategory !== null  && p.stock > 0); // le hacemos un filtro a todos los productos antes de enviarlos al carrusel
	const currentProduct = filtro.slice(indexOfFirstProduct,indexOfLastProduct);
    // console.log('estos son los de jose', currentProduct)

    const handleprev=()=>{
        var pagina=Math.ceil(filtro.length / productsPerPage);
		if(currentPage===1){
            setCurrentPage(pagina)
        }else{
            pagina=currentPage-1;
            setCurrentPage(pagina)
        }
	};

    const handlenext=()=>{
        var pagina=Math.ceil(filtro.length / productsPerPage);
		if(currentPage===pagina){
            pagina=1;
            setCurrentPage(pagina)
        }else{

            pagina=currentPage+1;
            setCurrentPage(pagina)
        }
	};

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addToCart(Number(e.target.value)))
        // dispatch(editOrder(user.id, {carrito: cart}))
        window.localStorage.setItem('carrito', JSON.stringify(cart))
        dispatch(setCartOn())
        swal("Agregado al carrito!", {
            buttons: false,
            icon: 'success',
            timer: 1500,
        });
        
      }

       
    return(<>
        <div className="container" style={{padding: "15px"}}>
            <div className="row animate__animated animate__slideInRight">

                {currentProduct ? currentProduct.map((e)=>{
                    return(
                    <div className="col animate__animated animate__slideInRight img-fluid" key={e.id} >
                        <div className="card2 ">
                            <Link to={`/details/${e.id}`}>
                                <img src={e.image} alt="products" className="img-fluid"/>
                            </Link>
                            <div className="card-body">
                                <h5>{e.name}</h5>
                                <p className="card-text">Precio: ${formato.format(e.price)}</p>
                                <p className="card-text">Stock: {e.stock}</p>
                            </div>
                            <div>
                                {cart.some((c) => e.id === c.id) ? 
                                <div className="alert alert-warning" role="alert">
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
                    )
                })
            : null}
            
            </div>
            <nav className="position-absolute start-50 translate-middle-x" aria-label="Page navigation example">
                {currentPage ? (
                    <div>
                        <ul className="pagination" style={{padding: "15px"}}>
                            <li className="page-item">
                            <button  className="page-link" aria-label="Previous" aria-hidden="true" onClick={handleprev}>&laquo;</button>
                            </li>
                            <li className="page-item">
                            <button  className="page-link" aria-hidden="true" aria-label="Next" onClick={handlenext}>&raquo;</button>
                            </li>
                        </ul>
                    </div>
                ): null}  
            </nav>
        </div>
        </>
    )
}
    
export default CardCarrusel;