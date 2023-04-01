import React from "react";
import Swiper2 from "../Carousel/Swiper2";

const HomeSec4 = () => {
  return (
    <div className="w-[100vw] xl:h-[632px] h-auto pb-[48px] bg-white text-black">
      <h3 className="xl:mt-[50px] font-[700] text-[32px] text-[#121216] text-center mb-[24px] xl:mx-[0] mx-[30px] ">
        Kami Hadir Bersama Mentor-Mentor yang Berpengalaman
      </h3>
      <div className="xl:h-[500px] h-[500px] flex justify-center z-0 relative">
        <div
          data-aos="fade-up"
          className="mt-[30px] mb-[150px] w-[100vw]"
        >
          <Swiper2 />
        </div>
      </div>
    </div>
  );
};

export default HomeSec4;
