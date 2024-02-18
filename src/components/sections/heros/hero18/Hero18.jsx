// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";



const Hero = ({ theme }) => {
  const { hero18 } = useSelector((state) => state.template18);

  return (
    <div className="dark:bg-black dark:text-white duration-300 relative z-20">
      <div className="container18 min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="order-1 sm:order-2">
            <img
              src={theme === "dark" ? hero18.darkImage : hero18.lightImage}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[500px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p className="text-primary text-2xl font-serif">{hero18.smTitle}</p>
            <h1 className="text-5xl lg:text-7xl font-semibold font-serif">{hero18.title}</h1>
            <p>{hero18.Description} </p>
            <button className="rounded-md bg-[--primary18-color] hover:bg-[--primary18-color-80] transition duration-500 py-2 px-6 text-black">
              {hero18.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
