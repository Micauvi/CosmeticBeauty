import React from "react";

const ItemListContainer = ({titulo, descripcion}) => {
    
  return (
    <div className="listContainer">
      <img src="./src/assets/bellezatodoslosdias.jpg" alt="mujer maquillada" className="img-fluid"/>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
  );
};

export default ItemListContainer;
