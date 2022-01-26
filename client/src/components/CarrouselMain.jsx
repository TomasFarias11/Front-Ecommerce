import React from 'react';
import { Link } from "react-router-dom";

function CarrouselMain() {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        {/* <Link to="/category"> */}
            <div class="carousel-item active">
                <img src="https://i.postimg.cc/7YQ1T3jm/lanzamiento-i-Phone13-AMEX-Banner-Desktop.jpg" class="d-block w-100 " alt="..."/>
            </div>
        {/* </Link> */}
        <div class="carousel-item">
            <img src="https://i.postimg.cc/K86n0ZGT/especial-AMEX-bannerdesktop.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <img src="https://i.postimg.cc/htzL8JBg/enero-macro-sliderweb-1920x640.jpg" class="d-block w-100" alt="..."/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default CarrouselMain;