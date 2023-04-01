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
import CardArtikel from "../Card/CardArtikel";

export default function Swiper1() {
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
        className="mySwiper"
      >
        {Data.map((item) => (
          <SwiperSlide>
            <CardArtikel tag={item.tag} title={item.title} date={item.date} desc={item.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
