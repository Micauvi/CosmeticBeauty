import React, { useEffect, useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="d-flex justify-content-center ">
      <button className="botones" disabled={count <= 1} onClick={decrease}>
        -
      </button>
      <span className="fs-5 mx-3">{count}</span>
      <button className="botones" disabled={count >= stock} onClick={increase}>
        +
      </button>
      <div>
        <button
          className="botones ms-5"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al Carrito
        </button>
      </div>
      {/* <Button 
        onClick={
          texto === "+"
            ? () => setContador((contador) => contador + 1)
            : () => setContador((contador) => Math.max(contador - 1, 0))
        }
      >
        {texto}
      </Button> */}
    </div>
  );
};

export default ItemCount;
