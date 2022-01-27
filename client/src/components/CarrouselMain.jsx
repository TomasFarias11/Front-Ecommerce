import React from 'react';
import { Link } from "react-router-dom";

function CarrouselMain() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
        {/* <Link to="/category"> */}
            <div className="carousel-item active">
                <img src="https://i.postimg.cc/7YQ1T3jm/lanzamiento-i-Phone13-AMEX-Banner-Desktop.jpg" className="d-block w-100 " alt="..."/>
            </div>
        {/* </Link> */}
        <div className="carousel-item">
            <img src="https://i.postimg.cc/K86n0ZGT/especial-AMEX-bannerdesktop.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
            <img src="https://i.postimg.cc/htzL8JBg/enero-macro-sliderweb-1920x640.jpg" className="d-block w-100" alt="..."/>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default CarrouselMain;