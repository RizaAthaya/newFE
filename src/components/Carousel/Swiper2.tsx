import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../css/Swiper1.module.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

//util
import Data from "../../utils/Data.json";

//components
import CardMentor from "../Card/CardMentor";

export default function Swiper2() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper relative"
      >
        {Data.map((item) => (
          <SwiperSlide>
            <CardMentor/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
