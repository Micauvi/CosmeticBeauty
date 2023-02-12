import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import imgheader1 from "../../assets/imgHeader1.jpg"
import imgheader2 from"../../assets/imgHeader2.jpg"
import imgheader3 from "../../assets/imgHeader3.jpg"

function ControlledCarousel({ data }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div id="carouselExample" className="carousel slide w-100">
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src={imgheader1}
              className="d-block w-100 i"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={imgheader2}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={imgheader3}
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
