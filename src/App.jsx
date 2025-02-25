import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategort from "./Pages/ShopCategory";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategort category="men" />} />
        <Route path="/women" element={<ShopCategort category="women" />} />
        <Route path="/kids" element={<ShopCategort category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":ProductId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
