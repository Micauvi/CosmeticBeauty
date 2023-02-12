import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import shopping from "../../assets/shopping-cart.png"

const CartWidget = () => {
  const {totalProducts} = useCartContext()
  
  return (
    <Link to="/cart">
    <button type="button" className="btn btn-light d-flex justify-content-end bd-highlight mb-2 ">
      <img src={shopping} alt="" className="carrito"/>
      <p>{totalProducts() || ''}</p>   
      
    
    </button></Link>
  );
};

export default CartWidget;
