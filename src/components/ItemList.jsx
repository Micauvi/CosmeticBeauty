import React from "react";
import Item from "./Item";

const ItemList = function ({ data }) {
  return data.map(({ id, categoria, nombre, descripcion, imagen, precio }) => (
    <Item
      id={id}
      categoria={categoria}
      nombre={nombre}
      descripcion={descripcion}
      imagen={imagen}
      precio={precio}
    />
  ));
};

export default ItemList;
