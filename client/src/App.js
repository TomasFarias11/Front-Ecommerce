import {Route, Routes} from "react-router-dom";
import ProductsBySearch from "./pages/ProductsBySearch";
import NotFound from "./pages/NotFound"
import Home from "./pages/Home";
import Details from "./pages/Details";
import Admin from "./pages/Admin";
import Products from "./pages/Products";
import NavBar from "./pages/NavBar";
import Footer from "./components/Footer";
import AddProduct from "./components/admin/AddProduct"
import EditProduct from "./components/admin/EditProduct"
import AdminProduct from "./components/admin/AdminProduct"
import AdminCategory from "./components/admin/AdminCategory"
import AddCategory from "./components/admin/AddCategory"
import EditCategory from "./components/admin/EditCategory"
import LoginScreen from "./pages/LoginScreen";
import {useDispatch} from 'react-redux';
import {setCart} from './actions/actionProducts.js'
import Formulario from "./pages/Formulario"
import Boton from "./MercadoPago/Boton";
import CheckOut from './components/CheckOut'
import Aceptado from "./MercadoPago/Aceptado";
import Rechazado from "./MercadoPago/Rechazado";
import AdminUser from "./components/admin/AdminUser";
import Compra from './components/Compra';
import Profile from "./components/Perfil"
import Contact from "./components/Contact";
import Orders from "./components/admin/Orders";
import DetailsOrden from "./pages/DetailsOrden";
import EditOrder from "./components/admin/EditOrder";
import Ibot from "./components/Ibot";

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
      <Ibot/>
      <NavBar />
      <Routes>
      <Route exact path='/login' element={<LoginScreen />} />      
      <Route exact path="*" element={<NotFound/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/admin" element={<Admin/>}/>
      <Route exact path="/admin/product" element={<AdminProduct/>}/>
      <Route exact path="/admin/addProduct" element={<AddProduct/>}/>
      <Route exact path="/admin/Category" element={<AdminCategory/>}/>
      <Route exact path="/admin/Category/:id" element={<EditCategory/>}/>
      <Route exact path="/admin/addCategory" element={<AddCategory/>}/>
      <Route exact path="/admin/edit/:id" element={<EditProduct/>}/>
      <Route exact path="/details/:id" element={<Details/>}/>
      <Route exact path="/category/:category" element={<Products/>}/>
      <Route exact path="/search" element={<ProductsBySearch/>}/>
      <Route exact path= "/user" element={<Formulario/>}/>
      <Route exact path= "/mercadopago" element={<CheckOut/>}/>
      <Route exact path= "/mercadopago/aceptado" element={<Aceptado/>}/>
      <Route exact path= "/mercadopago/compra" element={<Compra/>}/>
      <Route exact path= "/mercadopago/boton" element={<Boton/>}/>
      <Route exact path= "/admin/user" element={<AdminUser/>}/>
      <Route exact path= "/profile" element={<Profile/>}/>
      <Route exact path= "/contactanos" element={<Contact/>}/>
      <Route exact path= "/order" element={<Orders/>}/>
      <Route exact path= "/order/user/:id/details/:idOrder" element={<DetailsOrden/>}/>
      <Route exact path= "/order/edit/:id" element={<EditOrder/>} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;