import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // import cart icon
import "./Navbars.css";
import { EcomContext } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";



const Navbars = () => {
  const{quantity,setQuantity}=useContext(EcomContext)
  const { login ,setLogin} = useContext(EcomContext);
  const navi= useNavigate()

const handleLogOut = () => {
  setLogin(false);
navi('/login')
};



  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          🛍️ My-React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/TotalProducts" className="nav-link">
                Products
              </Link>
            </li>
            <Link to="/cart" className="nav-link position-relative">
              <FaShoppingCart size={20} />
              {quantity > 0 && <span className="cart-badge">{quantity}</span>}
            </Link>
            {login ? (
              <li className="nav-item">
                <span onClick={handleLogOut} className="nav-link logout-link">
                  LogOut
                </span>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  LogIn
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbars;
