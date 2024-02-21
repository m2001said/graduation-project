import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./testimonials16.css";

const Testimonials16 = () => {
  const { testimonial } = useSelector((state) => state.template16);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="testimonials16 container16 section16" id="testimonials16">
      <h2 className="section__title16 " data-title="Testimonials">
        What Client Say's
      </h2>
      <Swiper
        spaceBetween={30}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {testimonial.testimonialsdata.map(({ img, title, service, description }, index) => {
          return (
            <SwiperSlide className="testimonials__item16" key={index}>
              <div className="testimonial__qoute16">
                <p className="testimonials__description16">{description}</p>
                <button className={`custom-pagination-button ${index === activeIndex ? "active" : ""}`} onClick={() => setActiveIndex(index)}>
                  &#9662;
                </button>
              </div>
              <div className="testimonial__content16">
                <div className="testimonial__img-wrapper16">
                  <img src={img} alt="" className="testimonial__img16" />
                </div>
                <div>
                  <h3 className="testimonial__title16">{title}</h3>
                  <p className="testimonial__service16">{service}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials16;
