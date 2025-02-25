import { Link, useNavigate } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, loginWithRedirect, logout } = useAuth0();
  const { cart } = useSelector((store) => store.cart);
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img className="myntra_home" src={logo} alt="Shoppy Home" />
        </Link>
        <p>Shoppy</p>
      </div>

      <nav className="nav_bar">
        <Link to="/">Shop</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
      </nav>

      <div className="box">
        <div className="action_container" onClick={() => navigate("/cart")}>
          <FaShoppingBag />
          {/* Render cart count dynamically */}
          <sup>{cart.length}</sup>
        </div>

        {user ? (
          <h5
            className="logout"
            onClick={() => {
              window.alert("log out."), logout();
            }}
          >
            {user.name}
          </h5>
        ) : (
          <div className="action_bar">
            <div
              className="action_container"
              onClick={() => loginWithRedirect()}
            >
              <span className="action_name">Login</span>
              <RiLoginBoxFill />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
