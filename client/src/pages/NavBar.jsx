import React from "react";
//import Search from "./search";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import {useDispatch} from 'react-redux';
import {getProductByCategory} from '../actions/actionProducts.js'


function NavBar() {
    const dispatch = useDispatch()

    

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  h6 sticky-top" style={{background: "#111111"}}>
      <div className="container-fluid">
        <Link to="/" >
            <a className="navbar-brand h1 $headings-font-weight" href=" ">
            <img
                src="https://i.postimg.cc/qRkkh295/igroup-nav-2.png"
                alt="iGroup-logo"
                width="170" height="80"
                className = 'animate__animated animate__jackInTheBox'
                />
            </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/category/macbook">
                    <a className="nav-link" aria-current="page" href=" " onClick={() => dispatch(getProductByCategory("macbook"))}> Mac </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/category/ipad">
                    <a className="nav-link" aria-current="page" href=" " onClick={() => dispatch(getProductByCategory("ipad"))}> iPad </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/category/iphone">
                    <a className="nav-link" aria-current="page" href=" " onClick={() => dispatch(getProductByCategory("iphone"))}> iPhone </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/category/watch">
                    <a className="nav-link" aria-current="page" href=" " onClick={() => dispatch(getProductByCategory("watch"))}> Watch </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/category/airpods">
                    <a className="nav-link" aria-current="page" href=" " onClick={() => dispatch(getProductByCategory("airpods"))}> AirPods </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/category/tv">
                    <a className="nav-link" aria-current="page" href=" " onClick={() => dispatch(getProductByCategory("tv"))}> TV & Home </a>
                </Link>
            </li>

            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/users/google">
                    <a className="nav-link" href=" " onClick=""> Login </a>
                </Link>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href=" " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Admin </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <Link to="/products">
                            <a className="dropdown-item" href=" "> Opcion 1 </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <a className="dropdown-item" href=" "> Opcion 2 </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <a className="dropdown-item" href=" "> Opcion 3 </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <a className="dropdown-item" href=" "> Opcion 4 </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <a className="dropdown-item" href=" "> Opcion 5 </a>
                        </Link>
                    </li>
                </ul>
            </li>  
           
            <li className="nav-item">  
                <li className="nav-item">
                    <a className="nav-link " aria-current="page" href=" " onClick=""> Logout </a>
                </li>
            </li>
            <li className="nav-link">
                <p className="text-md-start">
                    <strong> Bienvenido:{" "}
                        <Link style={{ textDecoration: "none", color: "orange" }} to="/products"> </Link>
                    </strong>
                </p>
            </li>
          </ul>
          <li className="nav-link" onClick="">
          <Link to="/products">
              <button type="button" className="btn btn-secondary position-relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  class="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                </span>
              </button>
            </Link>
          </li>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
