import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../css/Swiper1.module.css";

// import required modules
import { Pagination } from "swiper";

import Data from "../../utils/Data.json"
import CardBeasiswa from "../Card/CardBeasiswa";

// interface Props {
//   jumlah:number
// }
export default function Carousel() {
  const [jumlahnya, setJumlah] = useState(0);
  useEffect(()=>{
    setJumlah( window.screen.width > 1550 ? 4 : 3);
  }, [window.screen.width])
  return (
    <>
      <Swiper
        slidesPerView={jumlahnya}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Data.map((item)=>(
          <SwiperSlide>
            <CardBeasiswa tag={item.tag} date={item.date} title={item.title}/>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}
