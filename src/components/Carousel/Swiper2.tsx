import React, { useEffect, useState } from "react";
import axios from "axios";

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
// import Data from "../../utils/Data.json";

//components
import CardMentor from "../Card/CardMentor";

interface item {
  name: string,
  scholar_history: string,
  study_track: string,
}

export default function Swiper2() {
  const [newMentor, setNewMentor] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:4000/mentor/"
      );
      setNewMentor(response.data.data);
      console.log("yang ini");
      console.log(response.data.data);
    }
    console.log("yang ini lho");
    fetchData();
  }, []);

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
        {newMentor.map((item:item, index) => (
          <SwiperSlide>
            <CardMentor key={index} name={item.name} scholar_history={item.scholar_history} study_track={item.study_track} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
