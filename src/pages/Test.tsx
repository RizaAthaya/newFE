import React from "react";
import { Theme, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { DemoCarousel } from "../components/Carousel/react";
import { makeStyles } from "@mui/styles";
import gojek from "../assets/gojek.svg";
import goacademy from "../assets/goacademy.svg";

{
  /* <h4 className="text-[2rem] text-white mt-[40px] flex mx-auto justify-center font-[600]">
          Official Learning Partner
        </h4> */
}

const useStyles = makeStyles((theme: Theme) => ({
  desc: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: "white",
    width: "100%",
    padding: "0 10%",
  },
  subDesc: {
    textAlign: "center",
    width: "100%",
    color: "white",
    marginTop: "40px",
  },
}));

const Test = () => {
  const classes = useStyles();
  return (
    <div className="flex justify-center mx-auto text font-sans font-work-sans items-center">
      <div className="absolute z-[100] mx-auto w-[70vw] justify-center">
        <div className="w-[90%] text-[60px] text-white font-bold flex mx-auto justify-center">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Basic Computing Community")
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
        {/* <p className="text-[1.25rem] text-white w-[80%] mt-[24px] flex mx-auto justify-center">
          Welcome to the BCC Club where minds drive to continually innovate and
          create valuable solutios to solve the problems
        </p> */}
        {/* <Typography
          component="p"
          sx={{
            margin: "auto",
            textAlign: "center",
            fontSize: "1.5rem",
            color: "white",
            width: "80%",
          }}
        >
          Welcome to the BCC Club where minds drive to continually innovate and
          create valuable solutios to solve the problems
        </Typography> */}
        <Typography component="p" variant="h6" className={classes.desc}>
          Welcome to the BCC Club where minds drive to continually innovate and
          create valuable solutios to solve the problems
        </Typography>
        <Typography component="h4" variant="h4" className={classes.subDesc}>
          Official Learning Partner
        </Typography>
        <div className="flex h-auto mx-auto justify-center mt-[25px]">
          <img className="w-auto h-auto mr-[20px]" src={gojek} />
          <img className="w-auto h-auto" src={goacademy} />
        </div>
        <button className="text-white text-[1.25rem] bg-[#0186C6] px-[24px] py-[12px] w-[60%] h-auto rounded-[8px] mt-[45px]">
          Explore Portfolio
        </button>
      </div>

      <div>
        <DemoCarousel />
      </div>
    </div>
  );
};

export default Test;
