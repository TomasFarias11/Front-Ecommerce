import {Route, Routes} from "react-router-dom";
import ProductsBySearch from "./pages/ProductsBySearch";
import NotFound from "./pages/NotFound"
import Home from "./pages/Home";
import Details from "./pages/Details";
import Admin from "./pages/Admin";
import Products from "./pages/Products";
import NavBar from "./pages/NavBar";
import Footer from "./components/Footer";
import CreateProduct from "./components/admin/CreateProduct"
import DeleteProduct from "./components/admin/DeleteProduct"
import EditProduct from "./components/admin/EditProduct"
import AdminProduct from "./components/admin/AdminProduct"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      {/* <Route exact path="/" element={<Landing/>}/> */}
      <Route exact path="*" element={<NotFound/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/admin" element={<Admin/>}/>
      <Route exact path="/admin/product" element={<AdminProduct/>}/>
      <Route exact path="/admin/create" element={<CreateProduct/>}/>
      <Route exact path="/admin/edit" element={<EditProduct/>}/>
      <Route exact path="/admin/delete" element={<DeleteProduct/>}/>
      <Route exact path="/details/:id" element={<Details/>}/>
      <Route exact path="/category/:category" element={<Products/>}/>
      <Route exact path="/search" element={<ProductsBySearch/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;