/* eslint-disable no-unused-vars */
import React from "react";
import  "./hero14.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";



const Hero14 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
    return (
      <div className="bg-[--website-14-color-6] dark:bg-gray-900" id={hero.sectionId}>
        <div className="container14">
          <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero14-bg-color flex justify-center items-center">
            <div className="container14 pb-8 sm:pb-0">
              {/* hero section */}
              <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={500} slidesPerView={1} autoplay={{ delay: 3000 }} className="mySwiper">
                {hero.heros.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      {/* text sec */}
                      <div className="hero14-textContent flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                        <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                        <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                          {data.description}
                        </h1>
                        <div>
                          <button
                            className={`bg-[--website-14-color-1] text-[--website-14-color-6] cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
                          >
                            {hero.buttonText}
                          </button>
                        </div>
                      </div>
                      {/* Img sec */}
                      <div className="order-1 sm:order-2">
                        <div>
                          <img
                            src={data.imgUrl}
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
