import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {totalProducts} = useCartContext()
  
  return (
    <Link to="/cart">
    <button type="button" className="btn btn-light d-flex justify-content-end bd-highlight mb-2 ">
      <img src="../src/assets/shopping-cart.png" alt="asd" className="carrito"/>
      <p>{totalProducts() || ''}</p>   
      
    
    </button></Link>
  );
};

export default CartWidget;
