import axios from "axios";
import React, { useEffect, useState } from "react";

interface Props {
  name: string;
  open_registration: string;
  close_registration: string;
  provider: string;
  key: number;
  tag_level: string;
  tag_cost: string;
  tag_country: string;
}


const CardBeasiswa = ({
  tag_level,
  tag_country,
  tag_cost,
  name,
  open_registration,
  close_registration,
  provider,
}: Props) => {
 

  return (
    <>
      {/* {
      Level.map((tags: tag) => {
        if (tags.id == tag_level) {
          TagLevel = tags.name;
          console.log(TagLevel)
        }
      })}
      {
          Cost.map((tags: tag) => {
            if (tags.id == tag_cost) {
              TagCost = tags.name;
              console.log(TagCost)
            }
          });
        }
      {
          Country.map((tags: tag) => {
            if (tags.id == tag_country) {
              TagCountry = tags.name;
              console.log(TagCountry)
            }
          });
        } */}

      <div className="mx-auto flex justify-center">
        <div className="m-[15px] py-[15px] px-[20px] sm:p-[24px] rounded-[16px] w-[75vw] sm:w-[400px] h-[180px] sm:h-[264px] font-[inter] border border-solid border-[#A9B1F4] mb-[10px] sm:mb-[48px] ml-[24px]">
          <div className="sm:flex hidden">
            <h3 className="bg-[#A9B1F4] text-black-400 px-[9px] py-[3px] text-[12px] rounded-[16px] mr-[8px] text-[#111D81]">
              {tag_level}
            </h3>
            <h3 className="bg-[#A9B1F4] text-black-400 px-[9px] py-[3px] text-[12px] rounded-[16px] mr-[8px] text-[#111D81]">
              {tag_country}
            </h3>
            <h3 className="bg-[#A9B1F4] text-black-400 px-[9px] py-[3px] text-[12px] rounded-[16px] text-[#111D81]">
              {tag_cost}
            </h3>
          </div>
          <div className="my-[16px] sm:p-[0] px-[10px]">
            <div className="text-left mb-[8px] text-[16px] text-black font-[400]">
              {provider}
            </div>
            <div className="text-left mb-[8px] text-[20px] text-black font-[700] h-[48px]">
              {name}
            </div>
          </div>
          <div className="hidden sm:block px-[16px] py-[8px] rounded-[8px] bg-[#A9B1F4] w-[352px] h-[72px] mx-auto">
            <div className="text-black-400 text-[16px] mb-[8px]">
              <h3 className="text-[16px] float-left font-[400]">
                Open Registration
              </h3>
              <h3 className="text-[16px] text float-right font-[400]">
                {open_registration}
              </h3>
            </div>
            <div className="text-[#ED1C24]">
              <h3 className="text-[16px] float-left font-[400]">
                Close Registration
              </h3>
              <h3 className="text-[16px] text float-right font-[400]">
                {close_registration}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBeasiswa;
