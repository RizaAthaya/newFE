import React, { useState } from "react";
import styled from "styled-components";

//assets
// import profile from "../../assets/Profileee.svg";
import logo from "../../assets/LogoSWU.svg"
import { RxHamburgerMenu, RxCrossCircled } from "react-icons/rx";

const HoverUnderline = styled.span`
  position: relative;
  display: inline-block;
  &:hover::after {
    content: "";
    display: block;
    height: 3.5px;
    width: 100%;
    background-color: #192bc2;
    position: absolute;
    bottom: -25px;
    animation: slide 0.3s ease-in-out forwards;
  }
  @keyframes slide {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

const navigation = [
  { name: "Mentoring", to: "/" },
  { name: "Pojok Beasiswa", to: "/team" },
  { name: "Komunitas", to: "/project" },
  { name: "Artikel", to: "/calendar" },
  { name: "Dashboard", to: "/calendar" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center shadow-xl p-4 w-auto z-10 shadow-xl mx-auto bg-white">
      <div className=" flex w-1/4 items-center ml-16 transition-color duration-300 ease-in-out hover:text-[#192BC2]">
        <img src={logo} className="mr-8"></img>
        {/* <h1 className="">LOGO</h1> */}
      </div>
      <div className="hidden xl:flex flex-row font-inter list-none justify-between w-1/2 items-center mx-auto">
        <ul className="flex mx-auto items-center">
          {navigation.map((item, index) => (
            <li className="mx-8">
              <a
                key={index}
                href={item.to}
                className={
                  window.location.pathname === item.to
                    ? "text-blue-500 hover:text-[#192BC2] transition font-bold items-center"
                    : "text-[#5a5c61] hover:text-blue-500 hover:font-medium transition items-center"
                }
              >
                <HoverUnderline>{item.name}</HoverUnderline>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden xl:block mr-[16px] px-[16px] w-1/4 transition-color duration-300 ease-in-out hover:text-[#192BC2] ">
        <button className="px-[24px] py-[12px] bg-[#192BC2] border border-solid border-[#FAFAFA] hover:bg-[#111D81] text-white rounded-[8px]">
          Log in
        </button>
        <button className="px-[24px] py-[12px] bg-[#FAFAFA] ml-[24px] border border-solid border-[#FAFAFA] text-[#121212] hover:bg-[#A9B1F4] rounded-[8px]">
          Register
        </button>
      </div>
      <div>
        <div className="xl:hidden block relative w-auto justify-between text-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 bg-transparent text-[#F78CB2] rounded-lg px-5 sm:px-7 flex flex-row items-center"
          >
            <RxHamburgerMenu className="text-[20px]" />
          </button>
          {isOpen && (
            <>
              <ul className="absolute mt-5 w-[200%] right-0 top-full bg-white rounded-b-lg shadow-lg z-10 overflow-y-auto h-32">
                {navigation.map((item, index) => (
                  <li
                    key={index}
                    className=" p-3 transition-color duration-300 ease-in-out hover:text-black hover:bg-blue-100 rounded-full hover:underline hover:text-white"
                  >
                    {item.name}
                  </li>
                ))}
                <li className="p-3 transition-color duration-300 ease-in-out hover:text-black hover:bg-blue-100 rounded-full hover:underline hover:text-white">
                  LOGIN
                </li>
                <li className="p-3 transition-color duration-300 ease-in-out hover:text-black hover:bg-blue-100 rounded-full hover:underline hover:text-white">
                  REGISTER
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
