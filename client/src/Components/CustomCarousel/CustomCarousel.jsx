import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./CustomCarousel.css";
class CustomCarousel extends Component {
  render() {
    return (
      <div className="Carousel">
        <i class="fas fa-quote-left quote1"></i>
        <Carousel
          centerMode
          centerSlidePercentage={100}
          autoFocus
          autoPlay
          width="400px"
          infiniteLoop
        >
          <div className="opinion-container">
            <p>
              "Société à trés grande valeur ajoutée."
            </p>
          </div>
          <div className="opinion-container">
            <p>
              "Logiciels de haute qualité,facile à utiliser et à maîtriser"
            </p>
          </div>
          <div className="opinion-container">
            <p>
              "Service facile,rapide et efficace."
            </p>
          </div>
        </Carousel>
        <i class="fas fa-quote-right quote2"></i>
      </div>
    );
  }
}
export default CustomCarousel;
