import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import back1 from "../../assets/Business-Web-Banner-17.jpg";
import back2 from "../../assets/pana.svg";
import back3 from "../../assets/hero.svg";
import back4 from "../../assets/BackgroundHome2.svg"
export class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img src={back3} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={back4} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
      </Carousel>
    );
  }
}
