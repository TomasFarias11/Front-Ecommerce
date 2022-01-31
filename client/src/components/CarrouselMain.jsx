import React from 'react';
// import { Link } from "react-router-dom";

function CarrouselMain() {
  return (
    <div className="carousel slide" id="carouselExampleIndicators" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={3}
          aria-label="Slide 4"
        />
      </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://i.postimg.cc/cHM5QVGW/IMG-5334.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://i.postimg.cc/Y0dnPYSy/IMG-5333.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://i.postimg.cc/mkLpV8TH/IMG-5335.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://i.postimg.cc/hjq5QKwM/IMG-5336.jpg" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    );
}

export default CarrouselMain;