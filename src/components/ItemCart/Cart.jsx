import React from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="container my-5 ">
          <div className="alert alert-warning fs-4" role="alert">
            Tu carrito está vacío
          </div>
          <div className="text-center">
            <Link to="/">
              <button className="botones fs-5">Inicio</button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p className="fs-4 text-align-center">Total: ${totalPrice()}</p>
      <Link to="/form">
        <button className="botones">Emitir Compra</button>
      </Link>
    </>
  );
};

export default Cart;
