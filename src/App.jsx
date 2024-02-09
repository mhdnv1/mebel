import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Catalog from "./pages/Ctalog/Catalog";
import Contacts from "./pages/Contacts/Contacts";
import Product from "./pages/Product/Product";
import Room from "./pages/Room/Room";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import "./styles/style.scss";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/room" element={<Room />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login"  element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
