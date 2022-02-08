import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import SearchAutocomplete from "./SearchAutocomplete";
import {useDispatch, useSelector} from 'react-redux';
import {getProductByCategory, setCartOn, setCartOff, setCart, createOrder, editOrder} from '../actions/actionProducts.js'
import {getUserId} from '../actions/actionUser.js'
import Cart from "../components/Cart.jsx"
import {getCategory} from "../actions/actionAdmin";



// import {useDispatch} from 'react-redux';
// import {getProductByCategory, postUserCreate} from '../actions/actionProducts.js'

function NavBar() {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.firstRed.products)
    const cartOnScreen = useSelector((state) => state.firstRed.cartNav)
    const user = JSON.parse(window.localStorage.getItem('usuario'))
    const userData = useSelector((state) => state.secondRed.userData)
    const cart = useSelector((state) => state.firstRed.cart)
    const allCategory = useSelector((state)=>state.fourthRed.category);



    useEffect(()=>
        dispatch(getCategory())
    ,[])

    let order = useSelector((state) => state.firstRed.order)
    order = order?.filter(e=>e?.status ==='open')
    const orderAlert = useSelector((state) => state.firstRed.orderAlert)


const handleClick = (e) => {
    e.preventDefault();
    if (cartOnScreen === false) {
        dispatch(setCartOn())
    } else {
        dispatch(setCartOff())
    }
    // dispatch(setCart(order[0].carrito))
}

const handleLogout = () => {
    window.localStorage.setItem('carrito', JSON.stringify([]))
    window.localStorage.setItem('usuario', JSON.stringify([]))
    window.location.reload()
}

useEffect(() => {
    if (userData && userData.username) {
        dispatch(createOrder(userData.id, {carrito: cart}))
    }
},[userData])

useEffect(() => {
    if (order && order[0]) {
        dispatch(setCart(order[0]?.carrito))
    }
}, [orderAlert])

useEffect(()=>{
    if (user && user.username) {
        dispatch(editOrder(user.id, {carrito: cart}))
    }
},[cart])

useEffect(() => {
    if (order && order[0]) {
        dispatch(setCart(order[0]?.carrito))
    } 
},[allProducts])

  return (
        <nav className="navbar navbar-expand-lg navbar-dark  h6 sticky-top" style={{background: "#111111"}}>
            <div className="container-fluid">
                <Link to="/" >
                    <span className="navbar-brand h1 $headings-font-weight" href="#!">
                        <img src="https://i.postimg.cc/qRkkh295/igroup-nav-2.png" alt="iGroup-logo" width="170" height="80" className = 'animate__animated animate__jackInTheBox' />
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        {allCategory ? allCategory.map((e)=>{
                            return(<li className="nav-item">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={`/category/${e.name}`}>
                                <span className="nav-link" aria-current="page" href="#!" onClick={() => dispatch(getProductByCategory(e.name))}>{e.name}</span>
                            </Link>
                        </li>)
                        })
                        : null
                        }
                        {/* si el usuario existe y es admin */}

                        { userData[0] || (user.username && user.admin) ?
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-link">
                                <p className="text-sm-start">
                                    <strong> Bienvenido: 
                                        <Link style={{ textDecoration: "none", color: "white" }} to="/profile"> {user.username}</Link>
                                    </strong>
                                </p>
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link " aria-current="page" href="/login" onClick={() => handleLogout()}> Logout </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href=" " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Admin </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link style={{ textDecoration: "none", color: "white" }} to="/admin/product">
                                            <span className="dropdown-item" href="#!"> Productos </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link style={{ textDecoration: "none", color: "white" }} to="/admin/Category">
                                            <span className="dropdown-item" href="#!"> Categoría </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link style={{ textDecoration: "none", color: "white" }} to="/admin/user">
                                            <span className="dropdown-item" href="#!"> Usuarios </span>
                                        </Link>
                                    </li>
                                </ul>
                            </li> 
                        </ul>
                        :
                        // si el usuario existe y no es admin
                        user.username ?
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-link">
                            <p className="text-md-start">
                                <strong> Bienvenido: 
                                    <Link style={{ textDecoration: "none", color: "white" }} to="/profile"> {user.username} </Link>
                                </strong>
                            </p>
                            </li>
                            <ul className="nav-item">  
                                <li className="nav-item list-unstyled">
                                    <a className="nav-link " aria-current="page" href="/login" onClick={() => handleLogout()}> Logout </a>
                                </li>
                            </ul>
                        </ul>
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
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart && cart.length}
                </span>
              </button>
          </li>
          <SearchAutocomplete />
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
