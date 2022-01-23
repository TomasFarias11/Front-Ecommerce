import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from '../actions/actionProducts.js'
import {Link} from "react-router-dom";

const CardCarrusel = () =>{

    const allProducts = useSelector((state) => state.firstRed.products) // me traigo todo los productos
    const dispatch = useDispatch()

    const[currentPage, setCurrentPage]=useState(1);
	const[productsPerPage, setProductsPerPage]=useState(4);
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProduct = allProducts.slice(indexOfFirstProduct,indexOfLastProduct);
    console.log('estos son los de jose', currentProduct)

    const handleprev=()=>{
        var pagina=Math.ceil(allProducts.length / productsPerPage);
		if(currentPage===1){
            setCurrentPage(pagina)
        }else{
            pagina=currentPage-1;
            setCurrentPage(pagina)
        }
	};

    const handlenext=()=>{
        var pagina=Math.ceil(allProducts.length / productsPerPage);
		if(currentPage===pagina){
            pagina=1;
            setCurrentPage(pagina)
        }else{

            pagina=currentPage+1;
            setCurrentPage(pagina)
        }
	};

    // useEffect(()=>{
	// 	Array.isArray(currentProduct) && currentProduct.length === 0 ? allProducts.map((e) => currentProduct.push(e)) : console.log('hola')
	// },[dispatch])
    
    return(<>
        <div className="container" style={{padding: "15px"}}>
            <div className="row animate__animated animate__slideInRight">
                {currentProduct ? currentProduct.map((e)=>{
                    return(
                    <div className="col-3 animate__animated animate__slideInRight" key={e.id} >
                        <div className="card ">
                            <Link to={`/details/${e.id}`}>
                                <img src={e.image} alt="" className="card-img-top" height="300px"/>
                            </Link>
                            <div class="card-body">
                                <h5>{e.name}</h5>
                                <p class="card-text">Price: {e.price}</p>
                                <p class="card-text">Amount: {e.stock}</p>
                            </div>
                            <button type="button" class="btn btn-outline-primary">Añadir al carrito</button>
                        </div>
                    </div>
                    )
                })
            : allProducts.map((e)=>{
                <div className="card">
                            <Link to={`/details/${e.id}`}>
                                <img src={e.image} alt="" className="card-img-top" height="300px"/>
                            </Link>
                            <div class="card-body">
                                <h5>{e.name}</h5>
                                <p class="card-text">Price: {e.price}</p>
                                <p class="card-text">Amount: {e.stock}</p>
                            </div>
                            <button type="button" class="btn btn-outline-primary">Añadir al carrito</button>
                        </div>
            })}
            </div>
            <nav class="position-absolute start-50 translate-middle-x" aria-label="Page navigation example">
                {currentPage ? (
                    <div>
                        <ul class="pagination" style={{padding: "15px"}}>
                            <li class="page-item">
                            <button  class="page-link" aria-label="Previous" aria-hidden="true" onClick={handleprev}>&laquo;</button>
                            </li>
                            <li class="page-item">
                            <button  class="page-link" aria-hidden="true" aria-label="Next" onClick={handlenext}>&raquo;</button>
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