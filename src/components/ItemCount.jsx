import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Boton = ({ texto, setContador, contador }) => {
  return (
    <div>
      <Button 
        onClick={
          texto === "+"
            ? () => setContador((contador) => contador + 1)
            : () => setContador((contador) => Math.max(contador - 1, 0))
        }
      >
        {texto}
      </Button>
    </div>
  );
};

export default Boton;
