import React from "react";
import "./hero6.css";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const Hero6 = () => {
  const { hero } = useSelector((state) => state.template6);

  return (
    <section className="design-6" id="Home">
      <div className="container mx-auto px-8 py-2">
        <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }} className="mySwiper">
          {hero.sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slider__wrapper flex items-center justify-between pt-5">
                <div className="slider__content w-1/2 ps-2">
                  <h2 className="mb-3 ">{item.title}</h2>
                  <p>{item.desc}</p>
                  <button className="btn">{hero.buttonText}</button>
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
