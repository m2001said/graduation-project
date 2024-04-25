import React from "react";
import "./testimonials1.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Testimonials1 = () => {

  const { pathname } = useLocation();
  const testimonial = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.testimonials;
    } else {
      return state.template1.testimonials;
    }
  });
  // const { testimonials } = useSelector((state) => state.template1);

  return (
    <div className="Testimonials1 design1">
      <div className="testimonials">
        <p className="Testimonials__title">{testimonial.title}</p>

        <div className="testimonials-cards">
          {testimonial.testimonials.map((card, index) => (
            <div className="testimonials-card" key={index}>
              <div className="testimonials-card-header">
                <img className="testimonials-card-header-img" src={card.imgUrl} alt=" " />
                <div className="testimonials-card-info">
                  <b>{card.name}</b>

                  <p>{card.location}</p>
                </div>
              </div>
              <p className="testimonials-card-body">{card.opinion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials1;
