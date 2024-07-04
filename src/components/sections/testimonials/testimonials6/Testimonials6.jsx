import React from "react";
import "./testimonials6.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonials6 = ({ template }) => {
  const testimonials = template.testimonials;

  return (
    <section className="design-6">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <h2 className="mb-4 ps-3">{testimonials.title}</h2>
            <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }} className="mySwiper">
              {testimonials.testimonials.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="single__testimonial">
                    <p className="review__content">{data.opinion}</p>
                    <h6>{data.name}</h6>
                    <p>{data.role}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="slider__img md:w-1/2 flex justify-center">
            <img src={testimonials.imgUrl} alt="testimonial_image" className="w-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials6;
