import React from "react";
import "./testimonials2.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
 import { EffectCards } from "swiper/modules";
 

const Testimonials2 = ({ template }) => {
  const testimonials = template.testimonials;
 
  return (
    <section id="testimonials2" className="section2">
      <h5>{testimonials.subtitle}</h5>
      <h2>{testimonials.title}</h2>
      <Swiper
        className="container2 testimonials2__container2"
        // install Swiper modules
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
      >
        {testimonials.testimonials.map((testimonial, index) => (
          <SwiperSlide className="testimonial2" key={index}>
            <div className="client__avatar2">
              <img src={testimonial.imgUrl} alt="" />
            </div>

            <h5 className="client__name2">{testimonial.name}</h5>
            <p className="client__review2 ">{testimonial.opinion}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials2;
