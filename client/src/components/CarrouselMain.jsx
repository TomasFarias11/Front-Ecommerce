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
</div>
    );
}

export default CarrouselMain;