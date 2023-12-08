import React from "react";
import "./testimonials1.css";
import { useSelector } from "react-redux";

const Testimonials1 = () => {
  const { testimonial } = useSelector((state) => state.template);

  return (
    <div className="testimonials">
      <p className="Testimonials__title">{testimonial.title}</p>

      <div className="testimonials-cards">
        {testimonial.cards.map((card, index) => (
          <div className="testimonials-card" key={index}>
            <div className="testimonials-card-header">
              <img className="testimonials-card-header-img" src={card.imgUrl} alt=" " />
              <div className="testimonials-card-info">
                <p>
                  <b>{card.name}</b>
                </p>
                <p>{card.location}</p>
              </div>
            </div>
            <p className="testimonials-card-body">{card.opinion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials1;
