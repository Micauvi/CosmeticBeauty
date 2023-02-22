import React from "react";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  
  return (
    <div>
      <div className="d-flex shadow p-6 mb-3 ">
        <img
          src={product.image}
          className="w-25 align-item-center shadow p-6 mb-3 "
          alt="..."
        />
        <div className="card-body cards">
          <p className="card-title d-flex justify-content-center mb-5 fs-3">
            Producto: {product.nombre.toUpperCase()}
          </p>
          <p className="card-text d-flex justify-content-center mb-5 fs-5">
            Precio: ${product.precio}
          </p>
          <p className="card-text d-flex justify-content-center fs-4 mb-5">
            <small className="text-muted">Cantidad: {product.quantity}</small>
          </p>
          <p className="card-text d-flex justify-content-center fs-4 mb-5">
            <small className="text-muted">
              Subtotal: ${product.quantity * product.precio}
            </small>
          </p>
          <button
            className="botones align-item-center"
            onClick={() => removeProduct(product.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
