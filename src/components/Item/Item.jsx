import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = function ({ id, nombre, imagen }) {
  return (
    <Card className="d-inline-flex justify-content-center w-25">
      <Card.Img variant="top" src={imagen} className="w-50" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Link to={`/${id}`}>
          <button className="botones">Saber Mas</button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
