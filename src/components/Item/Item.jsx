import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Item = function ({ id, nombre, image }) {
  return (
   
    
      <div className="col-4 d-inline-flex">
        <div className="card w-100 shadow p-3 m-5 bg-body-tertiary rounded ">
          <Card.Img
            variant="top"
            src={image}
            className="w-75 m-4 shadow p-6 mb-3  rounded-4"
            style={{ objectFit: "cover" }}
          />
          <div className="card-body cards ">
            <h5 className="card-title m-5 w-75">{nombre.toUpperCase()}</h5>
            <Link to={`/${id}`}>
              <button className="botones w-50 m-4">Saber más</button>
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default Item;
