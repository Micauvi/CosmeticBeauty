import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Model({ orderId }) {
  
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Gracias por su compra</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5>Su numero de orden es: </h5>
          <h4>{orderId}</h4>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/">
            <Button className="botones" >Inicio</Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}



export default Model;
