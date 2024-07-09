import React from "react";
import "./testimonials1.css";
import { useSelector } from "react-redux";
const Testimonials1 = ({ template }) => {
  const ownTestimonials = useSelector((state) => state.ownTemplate.testimonials);
  const testimonial = template ? template.testimonials : ownTestimonials;

  return (
    <div className="Testimonials1 design1" id={testimonial.sectionId}>
      <div className="testimonials">
        <p className="Testimonials__title">{testimonial.title}</p>

        <div className="testimonials-cards">
          {testimonial.testimonials.map((card, index) => (
            <div className="testimonials-card" key={index}>
              <div className="testimonials-card-header">
                <img className="testimonials-card-header-img" src={card.imgUrl} alt=" " />
                <div className="testimonials-card-info">
                  <b className="infotest1">{card.name}</b>

                  <p className="infotest1">{card.location}</p>
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
