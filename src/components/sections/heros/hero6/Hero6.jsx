import React from "react";
import "./hero6.css";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useLocation } from "react-router";

const Hero6 = () => {
  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template6.hero;
    }
  });
  return (
    <section className="design-6" id="Home">
      <div className="container mx-auto px-4 py-2">
        <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }} className="mySwiper">
          {hero.sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slider__wrapper flex items-center justify-between pt-5">
                <div className="slider__content w-1/2 ps-2">
                  <h2 className="mb-3 ">{item.title}</h2>
                  <p>{item.description}</p>
                  <button className="design-6-slider-btn">{hero.buttonText}</button>
                </div>
                <div className="slider__img w-1/2">
                  <img src={item.imgUrl} alt="" className="w-full" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero6;
