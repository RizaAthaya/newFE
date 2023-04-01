import React from "react";

//components
import CardSWUM from "../Card/CardSWUM";

//assets
import Bg from "../../assets/backgroundHome.svg";
import konsul from "../../assets/Konsultasi.svg";
import modul from "../../assets/modul.svg";
import resume from "../../assets/Resume.svg";
import team from "../../assets/Teams.svg";

const swum = [
  {
    name: "Konsultasi",
    sumber: "../../assets/Konsultasi.svg",
    desc: "Dapatkan panduan persiapan beasiswa terbaik dari mentor berpengalaman melalui konsultasi 1-on-1 yang mudah dan fleksibel.",
  },
  {
    name: "Modul & Video Pembelajaran",
    sumber: "../../assets/modul.svg",
    desc: "Akses berbagai modul & video pembelajaran untuk mempersiapkan diri menghadapi tes beasiswa dengan lebih percaya diri.",
  },
  {
    name: "Review Dokumen",
    sumber: "../../assets/Resume.svg",
    desc: "Kirimkan berbagai dokumen beasiswa kamu untuk direview oleh mentor ahli dan tingkatkan peluang meraih beasiswa impian.",
  },
];

const kelebihan = [
  {
    judul: "Harga Terjangkau",
    desc: " Dapatkan akses ke layanan lengkap dan berkualitas serta bimbingan dari mentor berpengalaman dengan biaya yang terjangkau.",
  },
  {
    judul: "Mentor Berpengalaman",
    desc: "Dibimbing oleh mentor berpengalaman yang membantu kamu mempersiapkan diri mengikuti beasiswa.",
  },
  {
    judul: "Materi Terstruktur",
    desc: " Kurikulum dan metode pembelajaran yang terstruktur dan lengkap untuk kamu mempersiapkan diri mengikuti beasiswa.",
  },
];

const HomeSec3 = () => {
  return (
    <div
      className="h-[2700px] lg:h-[2300px] xl:h-[1550px] w-[100vw] bg-home-image pt-[40px] mt-[60px] bg-cover"
    >
      <div className="m-auto justify-center">
        <h3 className="lg:mt-[60px] text-center text-white font-[700] text-[32px] sm:p-[0] px-[10px]">
          Bagaimana ScholarWithUs Membantu Kamu?
        </h3>
        <div className="justify-center xl:flex m-auto xl:mx-[10px] px-[4vw] xl:px-[15px] xl:py-[60px] py-[30px]">
          {swum.map((item) => (
            <CardSWUM name={item.name} desc={item.desc} sumber={item.sumber} />
          ))}
        </div>
      </div>
      <div className="mb-[50px] w-[100vw]">
        <h3 className="lg:mb-[30px] lg:mt-[30px] mx-auto mb-[48px] text-[32px] text-white font-[700]">
          Mengapa harus ScholarWithUs?
        </h3>
        <div className="flex mx-auto justify-center w-[100vw]">
          <div className="lg:flex h-auto justify-center">
            <img
              className="lg:w-[50vw] xl:pr-[125px] lg:px-[50px] xl:flex mx-auto justify-center w-[80%] lg:mb-[0] mb-[50px] sm:mb-[80px]"
              src={team}
            ></img>
            <div className="justify-center lg:h-auto">
              {kelebihan.map((item) => (
                <div className="flex mx-auto justify-center sm:mt-[30px] lg:mb-[50px]">
                  <div className="flex sm:mb-[35px] lg:w-[505px] w-[90vw] sm:w-[100vw] h-auto sm:h-[126px] sm:px-[30px]">
                    <img className="w-[30px] sm:w-[47px] h-[48px] sm:mr-[24px] mr-[12px] ml-[12px] sm:ml-[0]"></img>
                    <div className="h-auto">
                      <h3 className="font-[700] text-[24px] sm:text-[32px] mb-[16px] text-white text-left">
                        {item.judul}
                      </h3>
                      <h3 className="font-[400] text-[16px] sm:text-[20px] text-white text-left">
                        {item.desc}
                      </h3>
                      <hr className="my-[24px]"></hr>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec3;
