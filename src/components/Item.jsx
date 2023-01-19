import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = function ({ id,categoria, nombre,descripcion,imagen,precio }) {

  return (
    
      <Card className="d-inline-flex justify-content-center w-25">
        <Card.Img variant="top" src={imagen} className="w-50"  />
        <Card.Body >
          <Card.Title>{nombre}</Card.Title>
          <Link to={`/${id}`}>
          <Button variant="primary">Saber Mas</Button></Link>
        </Card.Body>
      </Card>
   
  );
};

export default Item;
