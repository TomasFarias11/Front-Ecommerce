import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from '../actions/actionProducts.js'
import {Link} from "react-router-dom";

const CardCarrusel = () =>{

    const allProducts = useSelector((state) => state.firstRed.products) // me traigo todo los productos
    const dispatch = useDispatch()

    const[currentPage, setCurrentPage]=useState(1);
	const[countriesPerPage, setCountriesPerPage]=useState(4);
	const indexOfLastProduct = currentPage * countriesPerPage;
	const indexOfFirstProduct = indexOfLastProduct - countriesPerPage;
	const currentProduct = allProducts.slice(indexOfFirstProduct,indexOfLastProduct);

    const handelprev=()=>{
        var pagina=Math.ceil(allProducts.length/countriesPerPage);
		if(currentPage===1){
            setCurrentPage(pagina)
        }else{
            pagina=currentPage-1;
            setCurrentPage(pagina)
        }
	};

    const handelnext=()=>{
        var pagina=Math.ceil(allProducts.length/countriesPerPage);
		if(currentPage===pagina){
            pagina=1;
            setCurrentPage(pagina)
        }else{
            var pagina=currentPage+1;
            setCurrentPage(pagina)
        }
	};

    useEffect(()=>{
		dispatch(getProducts())
	},[dispatch])
    
    return(<>
        <div className="container">
            <div className="row">
                {currentProduct.map((e)=>{
                    return(<div className="col-3" key={e.id}>
                        <div className="card">
                            <Link to={`/products/details/${e.id}`}>
                                <img src={e.image} alt="" className="card-img-top"/>
                            </Link>
                            <div class="card-body">
                                <h4>{e.name}</h4>
                                <p class="card-text">Price: {e.price}</p>
                                <p class="card-text">Amount: {e.stock}</p>
                            </div>
                            <button type="button" class="btn btn-outline-primary">Añadir al carrito</button>
                        </div>
                    </div>
                    )
                })}
            </div>
            <nav class="position-absolute start-50 translate-middle-x" aria-label="Page navigation example">
                {currentPage ? (
                    <ul class="pagination">
                        <li class="page-item">
                        <button  class="page-link" aria-label="Previous" aria-hidden="true" onClick={handelprev}>&laquo;</button>
                        </li>
                        <li class="page-item">
                        <button  class="page-link" aria-hidden="true" aria-label="Next" onClick={handelnext}>&raquo;</button>
                        </li>
                    </ul>
                ): null}  
            </nav>
        </div>
    </>
    )
}
    
export default CardCarrusel;
