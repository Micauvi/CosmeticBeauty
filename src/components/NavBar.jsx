import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navBar d-flex justify-content-evenly bd-highlight ">
        <Link to="/">
          <img className="logo" src="./src/assets/cosmetic.webp" alt="" />
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/categoria/crema"
                className="nav-link active"
                aria-current="page"
              >
                Cuidado de la piel
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/categoria/maquillajes"
                className="nav-link active"
                aria-current="page"
              >
                Maquillaje
              </Link>
            </li>
          </ul>
          <ul></ul>
        </div>

        <CartWidget className="carrito" />
      </nav>
    </div>
  );
};

export default NavBar;
