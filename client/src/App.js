import {Route, Routes} from "react-router-dom";
import ProductsBySearch from "./pages/ProductsBySearch";
import NotFound from "./pages/NotFound"
import Home from "./pages/Home";
import Details from "./pages/Details";
import Products from "./pages/Products";
import NavBar from "./pages/NavBar";
import Footer from "./components/Footer";
import LoginScreen from "./pages/LoginScreen";
import {useDispatch, useSelector} from 'react-redux';
import {setCart} from './actions/actionProducts.js'

function App() {
  
  const dispatch = useDispatch()
  // console.log('ESTE ES EK PU*TO LOCALSTORAGTE', window.localStorage.getItem('carrito'));
  JSON.parse(window.localStorage.getItem('carrito'))?.length > 0 ? JSON.parse(window.localStorage.getItem('carrito')): window.localStorage.setItem('carrito', JSON.stringify([]))
  dispatch(setCart(JSON.parse(window.localStorage.getItem('carrito'))))
  JSON.parse(window.localStorage.getItem('productos'))?.length > 0 ? window.localStorage.getItem('productos') : window.localStorage.setItem('productos',JSON.stringify([]))
  
  return (
    <div className="App">
      <NavBar />
      <Routes>

      <Route exact path='/login' element={<LoginScreen />} />      
      <Route exact path="*" element={<NotFound/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/details/:id" element={<Details/>}/>
      <Route exact path="/category/:category" element={<Products/>}/>
      <Route exact path="/search" element={<ProductsBySearch/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;