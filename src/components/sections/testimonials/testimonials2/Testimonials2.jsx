import React from "react";
import "./testimonials2.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "./tstyles2.css";
import { EffectCards } from "swiper/modules";
 

const Testimonials2 = ({ template }) => {
  const testimonials = template.testimonials;
 
  return (
    <section id="testimonials2">
      <h5>{testimonials.subtitle}s</h5>
      <h2>{testimonials.title}</h2>
      <Swiper
        className="container testimonials2__container"
        // install Swiper modules
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
      >
        {testimonials.testimonials.map((testimonial, index) => (
          <SwiperSlide className="testimonial2" key={index}>
            <div className="client__avatar">
              <img src={testimonial.imgUrl} alt="" />
            </div>

            <h5 className="client__name">{testimonial.name}</h5>
            <p className="client__review ">{testimonial.opinion}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials2;
