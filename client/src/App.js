import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound"
import Home from "./pages/Home";
import Details from "./pages/Details";
import Products from "./pages/Products";
import NavBar from "./pages/NavBar";
import Footer from "./components/Footer";
import LoginScreen from "./pages/LoginScreen";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>

      <Route exact path='/login' element={<LoginScreen />} />      
      <Route exact path="*" element={<NotFound/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/details/:id" element={<Details/>}/>
      <Route exact path="/category/:category" element={<Products/>}/>
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;