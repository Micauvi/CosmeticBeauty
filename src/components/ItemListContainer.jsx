import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { data } from "../data";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const id = useParams();
  console.log(id);

  console.log(data.categoria);
  useEffect(() => {
    if (id && id.categoria) {
      const item = data.filter((product) => product.categoria === id.categoria);
      
      setProductos(item);
    } else {
      setProductos(data);
    }
  }, [id]);

  return <ItemList data={productos} />;
};

export default ItemListContainer;
