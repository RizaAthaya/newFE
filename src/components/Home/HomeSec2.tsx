import React from "react";
import ScholarCarousel from "../Carousel/Swiper3";

const HomeSec2 = () => {
  return (
    <div className="w-[100vw] pt-[0.2rem]">
      <h2 className="text-[#192BC2] text-center mb-[2rem] text-[24px] sm-text-[48px] font-[700] ">
        Informasi Beasiswa
      </h2>
      <div className="w-[90vw] mx-auto">
        {/* <Slick1/> */}
        <ScholarCarousel/>
      </div>

      <button className="m-auto px-[24px] py-[12px] shadow-md bg-[#192BC2] rounded-md text-white mt-[48px]">
        Lihat beasiswa lainnya
      </button>
    </div>
  );
};

export default HomeSec2;
