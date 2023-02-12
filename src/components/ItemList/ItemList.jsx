import React from "react";
import Item from "../Item/Item";

const ItemList = function ({ data }) {
  return data.map(
    ({ id, category, nombre, descripcion, image, precio, categoriaId }) => (
      <Item
        key={id}
        id={id}
        category={category}
        nombre={nombre}
        descripcion={descripcion}
        image={image}
        precio={precio}
        categoriaId={categoriaId}
      />
    )
  );
};

export default ItemList;
