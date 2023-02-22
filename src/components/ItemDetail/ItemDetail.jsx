import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

import { Link, useParams } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const { addProduct } = useCartContext();

  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <div>
      <div className="d-flex shadow p-6 mb-3 ">
        <img
          src={data.image}
          className="w-25 align-item-center shadow p-6 mb-3 "
          alt="..."
        />
        <div className="card-body cards">
          <h5 className="card-title d-flex justify-content-center mb-5 fs-3">
            {data.nombre.toUpperCase()}
          </h5>
          <p className="card-text d-flex justify-content-center mb-5 fs-5">
            {data.descripcion}
          </p>
          <p className="card-text d-flex justify-content-center fs-4 mb-5">
            <small className="text-muted">${data.precio}</small>
          </p>
        </div>
      </div>
      {goToCart ? (
        <div className="justify-content-evenly d-flex fs-5">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="botones">Seguir comprando</button>
          </Link>

          <Link to="/cart" style={{ textDecoration: "none" }}>
            <button className="botones"> Pagar</button>
          </Link>
        </div>
      ) : (
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
