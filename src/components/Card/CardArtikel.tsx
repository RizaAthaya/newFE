import React from "react";

interface Props {
    tag:string,
    title:string,
    date:string,
    desc:string
}
const CardArtikel = ({tag, title, date, desc}: Props) => {
  return (
    <div className="w-[400px] h-[582px] rounded-md items-center mx-auto">
      <img className="w-[400px] h-[240px] rounded-md flex"></img>
      <div className="p-[24px] text-black-700">
        <h3 className="text-blue-600 text-sm text-left">{tag}</h3>
        <h1 className="text-black-700 text-2xl text-left mt-[8px]">
          {title}
        </h1>
        <h3 className="text-black-400 text-sm text-left mt-[8px]">{date}</h3>
        <p className="text-black-500 text-sm text-justify mt-[8px]">
          {desc}
        </p>
      </div>
      <button className="py-[12px] px-[24px] w-[350px] text-blue-700 border border-blue-700 rounded-xl hover:bg-blue-700 hover:text-white">Lihat Detail</button>
    </div>
  );
};

export default CardArtikel;
