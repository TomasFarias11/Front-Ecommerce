import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import {useDispatch, useSelector} from 'react-redux';
import {getProductByCategory, setCartOn, setCartOff} from '../actions/actionProducts.js'
import Cart from "../components/Cart.jsx"


function NavBar() {
    const dispatch = useDispatch()
    // const [cartOnScreen, setCartOnScreen] = useState(false)
    const cartOnScreen = useSelector((state) => state.firstRed.cartNav)
    const user = JSON.parse(window.localStorage.getItem('usuario'))
    const userData = useSelector((state) => state.secondRed.userData)

    // useEffect(()=>
    //     console.log('1')
    // ,[userData])

const handleClick = (e) => {
    e.preventDefault();
    if (cartOnScreen === false) {
        dispatch(setCartOn())
    } else {
        dispatch(setCartOff())
    }
}

const handleLogout = () => {
    window.localStorage.setItem('usuario', JSON.stringify([]))
    window.localStorage.setItem('carrito', JSON.stringify([]))
    window.location.reload()
}


// console.log('aparece o no', cartOnScreen)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  h6 sticky-top" style={{background: "#111111"}}>
      <div className="container-fluid">
        <Link to="/" >
            <span className="navbar-brand h1 $headings-font-weight" href="#!">
            <img
                src="https://i.postimg.cc/qRkkh295/igroup-nav-2.png"
                alt="iGroup-logo"
                width="170" height="80"
                className = 'animate__animated animate__jackInTheBox'
                />
            </span>
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
                    <span className="nav-link" aria-current="page" href="#!" onClick={() => dispatch(getProductByCategory("macbook"))}> Mac </span>
                </Link>
            </li>
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/category/ipad">
                    <span className="nav-link" aria-current="page" href="#!" onClick={() => dispatch(getProductByCategory("ipad"))}> iPad </span>
                </Link>
            </li>
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/category/iphone">
                    <span className="nav-link" aria-current="page" href="#!" onClick={() => dispatch(getProductByCategory("iphone"))}> iPhone </span>
                </Link>
            </li>
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/category/watch">
                    <span className="nav-link" aria-current="page" href="#!" onClick={() => dispatch(getProductByCategory("watch"))}> Watch </span>
                </Link>
            </li>
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/category/irpods">
                    <span className="nav-link" aria-current="page" href="#!" onClick={() => dispatch(getProductByCategory("airpods"))}> AirPods </span>
                </Link>
            </li>
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/category/tv">
                    <span className="nav-link" aria-current="page" href="#!" onClick={() => dispatch(getProductByCategory("tv"))}> TV & Home </span>
                </Link>
            </li>
            {/* si el usuario existe y es admin */}
            { userData[0] || (user.username && user.admin) ?
            <div>
                <li className="nav-item">  
                <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#!" onClick={() => handleLogout()}> Logout </a>
                </li>
                </li>
                <ul className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Admin </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <Link to="/products">
                            <span className="dropdown-item" href="#!"> Opcion 1 </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <span className="dropdown-item" href="#!"> Opcion 2 </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <span className="dropdown-item" href="#!"> Opcion 3 </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <span className="dropdown-item" href="#!"> Opcion 4 </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <span className="dropdown-item" href="#!"> Opcion 5 </span>
                        </Link>
                    </li>
                </ul>
            </ul>  
            <li className="nav-link">
            <p className="text-sm-start">
                <strong> Bienvenido: {user.username}
                    <Link style={{ textDecoration: "none", color: "orange" }} to="/products"> </Link>
                </strong>
            </p>
            </li>
            </div>
            :
            // si el usuario existe y no es admin
            user.username ?
            <div>
                <ul>
                <ul className="nav-item">  
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#!" onClick={() => handleLogout()}> Logout </a>
                    </li>
                </ul>
                <li className="nav-link">
                <p className="text-md-start">
                    <strong> Bienvenido: {user.username}
                        <Link style={{ textDecoration: "none", color: "orange" }} to="/products"> </Link>
                    </strong>
                </p>
                </li>
                </ul>
            </div>
            : 
            <li className="nav-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
                    <span className="nav-link" href="#!"> Login </span>
                </Link>
            </li>
            }
            

            
          </ul>
          <li className="nav-link">
              <button type="button" className="btn btn-secondary position-relative" onClick={(e) => handleClick(e)}>
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
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                </span>
              </button>
          </li>
          <SearchBar />
          <div>
              {cartOnScreen &&
                <Cart/>         
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
