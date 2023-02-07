import React from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, totalPrice, id } = useCartContext();
  if (cart.length === 0) {
    return (
      <>
        <p>Tu carrito esta vacio</p>
        <Link to="/">Inicio</Link>
      </>
    );
  }

  return (
    <>
      {cart.map(product => (
        <ItemCart key={product.id} product={product} />
     ))}
      <p>Total: {totalPrice}</p>
      
    </>
  );
  
};

export default Cart;
