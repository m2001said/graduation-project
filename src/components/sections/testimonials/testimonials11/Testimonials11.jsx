import React from "react";
import "../testimonials11/testimonials11.css";
import { useSelector } from "react-redux";

const Testimonials11 = ({ template }) => {
  const ownTestimonials = useSelector((state) => state.ownTemplate.testimonials);
  const testimonials = template ? template.testimonials : ownTestimonials;
  return (
    <section className="testimonials11 " id={testimonials.sectionId}>
      <h2 className="section__title11">{testimonials.title}</h2>
      <div className="testimonials__container grid11">
        {testimonials.testimonials.map((testimonial, index) => (
          <div className="testimonials__item11" key={index}>
            <div className="thumb11">
              <img src={testimonial.imgUrl} alt="" />
            </div>
            <div className="content11">
              <h3 className="testimonials__title11">{testimonial.name}</h3>
              <span className="subtitle11">{testimonial.subtitle}</span>
              <p className="comment11">{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials11;
