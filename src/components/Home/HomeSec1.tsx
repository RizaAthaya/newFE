import React from "react";

//assets
import pana from "../../assets/pana.svg";

const HomeSec1 = () => {
  return (
    <div className="w-auto py-[10.5%] h-auto items-center justify-between  mx-[8%] lg:flex">
      <div className="xl:w-[45vw] text-left">
        <h1 className="mt-[50px] text-[32px] sm:text-[48px] xl:text-[64px] text-[#192BC2] font-bold font-[inter]">
          Buka Potensimu,
          <br /> Taklukkan Dunia.
        </h1>
        <h3 className="mt-[8px] text-[12px] sm:text-[15px] lg:text-[19px] text-[#4C4C50] font-[inter] lg:w-[50vw]">
          Biarkan mentor kami membimbing kamu mempersiapkan diri <br className="xl:flex hidden" /> meraih
          beasiswa ke perguruan tinggi terbaik di seluruh dunia.
        </h3>
        <button className="w-[190px] bg-[#192BC2] px-[24px] py-[12px] text-white font-[600] rounded-[8px] mt-[24px] xl:mt-[48px] shadow-md shadow-black">
          Daftar Sekarang
        </button>
      </div>
      <div className="xl:w-[45vw] mx-auto">
        <img
          src={pana}
          className="flex mx-auto xl:w-[80%] h-auto xl:mr-[5%] rounded-[8px] mt-[100px] xl:mt-[0]"
        ></img>
      </div>
    </div>
  );
};

export default HomeSec1;
