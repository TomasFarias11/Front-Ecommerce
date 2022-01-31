import React from 'react';
// import { Link } from "react-router-dom";

function CarrouselMain() {
  return (
    <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="carousel"
  >
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
        <img src="https://i.postimg.cc/02rK4tpk/i-Phone13-banner-desktop-1920x540-v2.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://i.postimg.cc/VL0Fjmry/enero-macro-sliderweb-1920x540.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://i.postimg.cc/XYCGjpHt/i-Phone13-Pro-banner-desktop-1920x540-v2.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://i.postimg.cc/15TV1pHp/lanzamiento-i-Pad9-slider-desktop-1920x540.jpg" className="d-block w-100" alt="..." />
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