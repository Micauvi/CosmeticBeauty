import React from "react";

const CartWidget = () => {
  const number="0"
  return (
    
    <button type="button" className="btn btn-light d-flex justify-content-end bd-highlight mb-2 ">
      <img src="./src/assets/shopping-cart.png" alt="asd" className="carrito"/><p>{number}</p>
      
    </button>
  );
};

export default CartWidget;
