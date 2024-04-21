/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useLocation } from "react-router";



const Hero14 = ({ handleOrderPopup }) => {
  
  // const { hero } = useSelector((state) => state.template14);
  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template14.hero;
    }
  });
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container14">
        <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero14-bg-color flex justify-center items-center">
          <div className="container14 pb-8 sm:pb-0">
            {/* hero section */}
            <Swiper
              spaceBetween={200}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {hero.heros.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text sec */}
                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                      <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                      <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                        {data.title2}
                      </h1>
                      <div>
                        <button
                          onClick={handleOrderPopup}
                          className={`bg-[--primary14-color] text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
                        >
                          {hero.buttonText}
                        </button>
                      </div>
                    </div>
                    {/* Img sec */}
                    <div className="order-1 sm:order-2">
                      <div>
                        <img
                          src={data.img}
                          alt=""
                          className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero14;
