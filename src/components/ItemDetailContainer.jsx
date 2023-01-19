import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { data } from "../data";

import Boton from "./ItemCount";

const ItemDetailContainer = () => {
 
  const [contador, setContador] = useState(0);
  const { id } = useParams();
  const itemId = useLocation().pathname.split("/")[1];
  const item = data.find((data) => data.id == itemId);

 

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
      <div className="d-flex justify-content-center ">
        <Boton texto={"-"} setContador={setContador} contador={contador} />{" "}
        <p className="d-block">{contador}</p>
        <Boton texto={"+"} setContador={setContador} contador={contador} />
        <Boton texto={"Agregar al carrito"} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
