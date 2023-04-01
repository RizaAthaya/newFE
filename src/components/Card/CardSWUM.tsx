import React from "react";

//assets
import Konsultasi from "../../assets/Konsultasi.svg";

interface props {
  sumber: string;
  name: string;
  desc: string;
}

const CardSWUM = ({ sumber, name, desc }: props) => {
  return (
    <div className="flex mx-[10px] justify-center mb-[30px]">
      <div className="sm:p-[24px] p-[12px] w-[80vw] sm:w-[400px]  h-auto sm:h-[341px] rounded-[16px] bg-white sm:mr-[16px]">
        <img className="m-auto w-[320px] h-[160px]" src={Konsultasi}></img>
        <h2 className="font-[600] text-[23px] text-center mt-[24px] text-[#192BC2]">
          {name}
        </h2>
        <h4 className="text-[15px] text-[#4C4C50] text-center">{desc}</h4>
      </div>
    </div>
  );
};

export default CardSWUM;
