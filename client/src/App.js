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
import Formulario from "./pages/Formulario"

function App() {
  
  const dispatch = useDispatch()
  // creacion u obtencion localStorage del carrito
  JSON.parse(window.localStorage.getItem('carrito'))?.length > 0 ? JSON.parse(window.localStorage.getItem('carrito')): window.localStorage.setItem('carrito', JSON.stringify([]))
  dispatch(setCart(JSON.parse(window.localStorage.getItem('carrito'))))
  // creacion u obtencion localStorage de los productos
  JSON.parse(window.localStorage.getItem('productos'))?.length > 0 ? window.localStorage.getItem('productos') : window.localStorage.setItem('productos',JSON.stringify([]))
  // creacion u obtencion localStorage del usuario
  JSON.parse(window.localStorage.getItem('usuario'))?.username ? window.localStorage.getItem('usuario') : window.localStorage.setItem('usuario', JSON.stringify([]))



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
      <Route exact path= "/user" element={<Formulario/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;