import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

//components
import Nav from "../components/general/Nav";
import Footer from "../components/general/Footer";

//section
import HomeSec1 from "../components/Home/HomeSec1";
import HomeSec2 from "../components/Home/HomeSec2";
import HomeSec3 from "../components/Home/HomeSec3";
import HomeSec4 from "../components/Home/HomeSec4";

import Swiper1 from "../components/Carousel/Swiper1";
import CardArtikel from "../components/Card/CardArtikel";

const Home = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div className="bg-white">
      <div className="fixed w-[100vw] z-[100]">
        <Nav />
      </div>
      {/* <div className="p-[150px] text-[45px] text-[#192BC2] font-bold">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("A simple yet powerful native javascript")
              .pauseFor(2500)
              .start();
          }}
        />
      </div>
      <CardArtikel tag="apa" title="apa" date="apa" desc="apa"/>
    <Swiper1/> */}
      <HomeSec1 />
      <HomeSec2 />
      <HomeSec3 />
      <HomeSec4 />
      <Footer />
    </div>
  );
};

export default Home;
