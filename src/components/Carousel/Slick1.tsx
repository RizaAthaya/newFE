import React from "react";
import Slider from "react-slick";
import "../../css/Slick.css";

import Data from "../../utils/Data.json"
import CardBeasiswa from "../Card/CardBeasiswa";

export default class Slick1 extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="carousel-react">
        <Slider {...settings}>
        {Data.map((item, index)=>(
          <div>
            <CardBeasiswa key={index} id={item.id} tag={item.tag} date={item.date} title={item.title}/>
          </div>
        ))}
        </Slider>
      </div>
    );
  }
}