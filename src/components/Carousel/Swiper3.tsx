import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import axios from "axios";
import CardBeasiswa from "../Card/CardBeasiswa";

interface scholarData {
  name: string;
  open_registration: string;
  close_registration: string;
  provider: string;
  id: number;
  tag_level: number;
  tag_cost: number;
  tag_country: number;
}

interface tag {
  name: string;
  id: number;
}

export default function ScholarCarousel() {
  const [Country, setCountry] = useState<tag[]>([]);
  const [Cost, setCost] = useState<tag[]>([]);
  const [Level, setLevel] = useState<tag[]>([]);
  const [scholarships, setScholarships] = useState<scholarData[]>([]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await axios.get("http://localhost:4000/scholarships/");
  //       setScholarships(response?.data.data);
  //       console.log("yang ini scholarships");
  //       console.log(response.data.data);
  //       console.log("Scholarships : ",scholarships)
  //     }
  //     console.log("yang ini lho");
  //     fetchData();
  //   }, []);

  let TagLevel = "";
  let TagCost = "";
  let TagCountry = "";

  const getAllScholar = async () => {
    try {
      const response = await axios.get("http://localhost:4000/scholarships/");
      setScholarships(response.data.data);
      console.log("yang ini scholarships");
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTagLevel = async () => {
    try {
      const response = await axios.get("http://localhost:4000/tags/level");
      setLevel(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
    console.log("Level : ", Level);
  };
  const getTagCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/tags/cost");
      setCost(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
    console.log("Cost : ", Cost);

  };

  const getTagCountries = async () => {
    try {
      const response = await axios.get("http://localhost:4000/tags/country");

      console.log(response.data.data);
      setCountry(response.data.data);
    } catch (err) {
      console.log(err);
    }
    console.log("Country : ", Country);

  };
  useEffect(() => {
    getAllScholar();
    getTagLevel();
    getTagCost();
    getTagCountries();
  }, []);

  scholarships.forEach(item=> {
    Country.forEach(item2=>{
      if(item.tag_country === item2.id){
        TagCountry = item2.name;
      }
    })
    Cost.forEach(item3=>{
      if(item.tag_cost === item3.id){
        TagCost = item3.name;
      }
    })
    Level.forEach(item4=>{
      if(item.tag_level === item4.id){
        TagLevel = item4.name;
        console.log("INI TAG LEVEL",TagLevel)
      }
    })
  })
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          930: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1950: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {scholarships.map((item, index) => {
          // {
          //   Level.map((tags: tag) => {
          //     if (tags.id == item.tag_level) {
          //       TagLevel = tags.name;
          //       console.log("Tag Level : ",TagLevel);
          //     }
          //   });
          // }
          // {
          //   Cost.map((tags: tag) => {
          //     if (tags.id == item.tag_cost) {
          //       TagCost = tags.name;
          //       console.log(TagCost);
          //     }
          //   });
          // }
          // {
          //   Country.map((tags: tag) => {
          //     if (tags.id == item.tag_country) {
          //       TagCountry = tags.name;
          //       console.log(TagCountry);
          //     }
          //   });
          // }
          return (
            <SwiperSlide>
              <CardBeasiswa
                key={index}
                tag_level={TagLevel}
                tag_country={TagCountry}
                tag_cost={TagCost}
                name={item.name}
                open_registration={item.open_registration}
                close_registration={item.close_registration}
                provider={item.provider}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
