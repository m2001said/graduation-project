import React from "react";
import "./testimonials2.css";
import AVTR1 from "../../../../assets/images2/avatar1.jpg";
import AVTR2 from "../../../../assets/images2/avatar2.jpg";
import AVTR3 from "../../../../assets/images2/avatar3.jpg";
import AVTR4 from "../../../../assets/images2/avatar4.jpg";
// import React { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./tstyles2.css";

// import required modules
import { EffectCards } from "swiper/modules";

const testimonialData = [
  {
    avatar: AVTR1,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
  },
  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
  },
  {
    avatar: AVTR3,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
  },
  {
    avatar: AVTR4,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
  },
];

const Testimonials2 = () => {
  return (
    <section id="testimonials2">
      <h5>Review from Clients</h5>
      <h2>Testimonials2</h2>

      <Swiper
        className="container testimonials2__container"
        // install Swiper modules
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={testimonial.avatar} alt="" />
            </div>

            <h5 className="client__name">{testimonial.name}</h5>
            <small className="client__review">{testimonial.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials2;
