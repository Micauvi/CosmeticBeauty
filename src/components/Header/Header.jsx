import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function ControlledCarousel({ data }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div id="carouselExample" className="carousel slide w-100">
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src="../src/assets/imgheader1.jpg"
              className="d-block w-100 i"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../src/assets/imgheader2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../src/assets/imgheader3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <ItemListContainer data={data} />
    </div>
  );
}

export default ControlledCarousel;
