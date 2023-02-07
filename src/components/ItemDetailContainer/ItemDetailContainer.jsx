import React, { useState } from "react";

import { Link, useLocation, useParams } from "react-router-dom";
import { data } from "../../data";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const { id } = useParams();
  const itemId = useLocation().pathname.split("/")[1];
  const item = data.find((data) => data.id == itemId);

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <div>
      <div className="card mb-3 w-25">
        <img src={item.imagen} className="card-img-top w-25 " alt="..." />
        <div className="card-body ">
          <h5 className="card-title d-flex justify-content-center">
            {item.nombre}
          </h5>
          <p className="card-text d-flex justify-content-center">
            {item.descripcion}
          </p>
          <p className="card-text d-flex justify-content-center">
            <small className="text-muted">${item.precio}</small>
          </p>
        </div>
      </div>
      {goToCart ? (
        <div className="justify-content-evenly d-flex fs-5">
          <Link to="/" style={{ textDecoration: "none" }}>
            Seguir comprando
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            Pagar
          </Link>
        </div>
      ) : (
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
