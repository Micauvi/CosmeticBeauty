import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/cosmetic.webp"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navBar d-flex justify-content-between bd-highlight ">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item mx-5">
              <Link to="/" className="nav-link active" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link
                to="/category/crema"
                className="nav-link active"
                aria-current="page"
              >
                Cuidado de la piel
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link
                to="/category/maquillajes"
                className="nav-link active"
                aria-current="page"
              >
                Maquillaje
              </Link>
            </li>
          </ul>
          
        </div>

        <CartWidget className="carrito" />
      </nav>
    </div>
  );
};

export default NavBar;
