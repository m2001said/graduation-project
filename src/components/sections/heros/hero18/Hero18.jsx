// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";



const Hero = ({ theme }) => {
  const { hero } = useSelector((state) => state.template18);

  return (
    <div className="pb-3 dark:bg-black dark:text-white duration-300">
      <div className="container18 min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="order-1 sm:order-2">
            <img
              src={theme === "dark" ? hero.darkImage : hero.lightImage}
              alt=""
              className="sm:scale-125 max-h-[500px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p className="text-primary text-2xl font-serif">{hero.smTitle}</p>
            <h1 className="text-5xl lg:text-7xl font-semibold font-serif">{hero.title}</h1>
            <p>{hero.Description} </p>
            <button className="rounded-md bg-[--primary18-color] hover:bg-[--primary18-color-80] transition duration-500 py-2 px-6 text-black">
              {hero.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
