import React, { useState } from "react";
import Nav from "../components/general/Nav";

//assets
import search from "../assets/icon/Search.svg";
import down from "../assets/icon/Down.svg";
import PaginationPB from "../components/Pagination/PaginationPB";
import Footer from "../components/general/Footer";

const PojokBeasiswa = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleDropdown = (index: number) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <div className="w-[100vw] h-auto bg-white">
      <Nav />
      <div className="py-[0%] px-[0vw]">
        <div className="m-auto w-[90vw] h-auto bg-header bg-no-repeat bg-cover rounded-[24px] my-[24px] text-center text-white px-[20%] py-[4%]">
          <h3 className="font-[700] text-[40px]">Pojok Beasiswa</h3>
          <h5 className="font-[400] text-[16px]">
            Temukan ratusan informasi beasiswa terlengkap dan terbaru dari
            berbagai negara di Pojok Beasiswa kami.
          </h5>
        </div>
        <form>
          <div className="flex m-auto mb-[32px] h-[48px] w-[80vw] lg:w-[610px]">
            <div className="w-[70vw] lg:w-[505px] flex justify-center items-center px-[24px] py-[12px] border border-solid border-gray-300 bg-gray-300 bg-opacity-30 rounded-tl-md rounded-bl-md shadow">
              <img src={search} className="w-[18px] h-[18px] mr-[11px]"></img>
              <input
                placeholder="Cari beasiswa"
                className="w-[85%] border border-solid border-transparent bg-transparent font-[400] text-[#868686] text-left text-[16px] hover:border-transparent"
              ></input>
            </div>
            <button className="flex justify-center w-[105px] bg-[#192BC2] rounded-tr-md rounded-br-md px-[24px] py-[12px] text-white text-[16px] items-center w-auto">
              Cari
            </button>
          </div>
        </form>
        <div className="block lg:flex w-[90vw] mx-auto">
          <div className="justify-center flex lg:m-[0] mx-auto w-[80vw] lg:w-[20vw] h-[400px] mb-[50px]">
            <div className="border border-solid border-[#A9B1F4] rounded-[16px] p-[24px]">
              <div className="flex mb-[24px] justify-between">
                <h3 className="font-[700] text-[24px] text-black">Filter</h3>
                <h3 className="font-[400] text-[14px] underline text-[#192BC2]">
                  Reset
                </h3>
              </div>
              <div>
                <h3 className="text-left mb-[8px] font-[400] text-[16px] text-black">
                  Jenjang
                </h3>
                <button
                  className="flex justify-between border border-solid border-[#86868B] w-[247px] px-[16px] py-[8px] rounded-[8px]"
                  onClick={() => toggleDropdown(0)}
                >
                  <h3 className="font-[400] text-[16px] text-[#86868B]">
                    Jenjang
                  </h3>
                  <img src={down}></img>
                </button>
                {isOpen[0] && (
                  <>
                    <ul className="absolute text-center w-[240px] bg-white rounded-b-lg shadow-lg z-10">
                      <li className="p-3 transition-color duration-150 ease-in-out hover:text-black rounded-full hover:underline hover:text-blue-700">
                        S1
                      </li>
                      <li className="p-3 transition-color duration-150 ease-in-out hover:text-black rounded-full hover:underline hover:text-blue-700">
                        S2
                      </li>
                      <li className="p-3 transition-color duration-150 ease-in-out hover:text-black rounded-full hover:underline hover:text-blue-700">
                        S3
                      </li>
                    </ul>
                  </>
                )}
              </div>
              <div>
                <h3 className="text-left mb-[8px] font-[400] text-[16px] text-black mt-[16px]">
                  Tipe Pendanaan
                </h3>
                <button
                  className="flex justify-between border border-solid border-[#86868B] w-[247px] px-[16px] py-[8px] rounded-[8px]"
                  onClick={() => toggleDropdown(1)}
                >
                  <h3 className="font-[400] text-[16px] text-[#86868B]">
                    Tipe Pendanaan
                  </h3>
                  <img src={down}></img>
                </button>
                {isOpen[1] && (
                  <>
                    <ul className="absolute text-center w-[240px] bg-white rounded-b-lg shadow-lg z-12">
                      <li className="p-3 transition-color duration-150 ease-in-out hover:text-black rounded-full hover:underline hover:text-blue-700">
                        Fully Funded
                      </li>
                      <li className="p-3 transition-color duration-150 ease-in-out hover:text-black rounded-full hover:underline hover:text-blue-700">
                        Half Funded
                      </li>
                    </ul>
                  </>
                )}
              </div>
              <div>
                <h3 className=" text-left mb-[8px] font-[400] text-[16px] text-black mt-[16px]">
                  Negara Tujuan
                </h3>
                <button
                  className="flex justify-between border border-solid border-[#86868B] w-[247px] px-[16px] py-[8px] rounded-[8px]"
                  onClick={() => toggleDropdown(2)}
                >
                  <h3 className="font-[400] text-[16px] text-[#86868B]">
                    Negara Tujuan
                  </h3>
                  <img src={down}></img>
                </button>
                {isOpen[2] && (
                  <>
                    <ul className="absolute text-center w-[240px] bg-white rounded-b-lg shadow-lg z-11">
                      <li className="p-3 transition-color duration-150 ease-in-out hover:text-black rounded-full hover:underline hover:text-blue-700">
                        Karea
                      </li>
                      <li className="p-3 transition-color duration-150 ease-in-out hover:text-black rounded-full hover:underline hover:text-blue-700">
                        Jepang
                      </li>
                      <li className="p-3 transition-color duration-150 ease-in-out hover:text-black rounded-full hover:underline hover:text-blue-700">
                        Jerman
                      </li>
                      <li className="p-3 transition-color duration-150 ease-in-out hover:text-black rounded-full hover:underline hover:text-blue-700">
                        Amerika
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
          <PaginationPB />
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default PojokBeasiswa;
