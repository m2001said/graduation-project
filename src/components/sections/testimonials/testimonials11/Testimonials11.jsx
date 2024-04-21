import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import "../testimonials11/testimonials11.css";

const Testimonials11 = () => {
  const { pathname } = useLocation();
  const testimonial = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.testimonials;
    } else {
      return state.template11.testimonials;
    }
  });
  const testimonials = testimonial.testimonials;
  return (
    <section className="testimonials11 container section11">
      <h2 className="section__title11">Clients & Reviews</h2>
      <div className="testimonials__container grid11">
        {testimonials.map(({ id, imgUrl, title, subtitle, comment }) => (
          <div className="testimonials__item11" key={id}>
            <div className="thumb11">
              <img src={imgUrl} alt="" />
            </div>
            <div className="content11">
              <h3 className="testimonials__title11">{title}</h3>
              <span className="subtitle11">{subtitle}</span>
              <p className="comment11">{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials11;
