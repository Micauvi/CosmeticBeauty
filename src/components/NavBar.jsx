import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navBar d-flex justify-content-evenly bd-highlight ">
        <div className="container-fluid ">
          <a href="#">
            <img className="logo" src="./src/assets/cosmetic.webp" alt="" />
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Cuidado de la piel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Maquillaje
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Te Asesoramos
                </a>
              </li>
            </ul>
           
          </div>
        </div>
        <CartWidget className="carrito"/>
        
      </nav>
      
    </div>
  );
};

export default NavBar;
