import React, { useState } from "react";
import "./testimonials3.css";
import { useSelector } from "react-redux";

const Testimonials3 = () => {
  const { testimonial } = useSelector((state) => state.template3);
  const [selected, setselected] = useState(0);
  const tLength = testimonial.testimonials.length;
  return (
    <div className="testimonials3" id="Testimonials">
      <div className="left-t3">
        <span>{testimonial.title.Subtitle}</span>
        <span className="stroke-text">{testimonial.title.titleA}</span>
        <span>{testimonial.title.titleB}</span>
        <span>{testimonial.testimonials[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>{testimonial.testimonials[selected].name}</span>- {testimonial.testimonials[selected].status}
        </span>
      </div>

      <div className="right-t3">
        <div></div>
        <div></div>

        <img key={selected} src={testimonial.testimonials[selected].imgUrl} alt="" />
        <div className="t3-arrows">
          <img
            onClick={() => {
              selected === 0 ? setselected(tLength - 1) : setselected((prev) => prev - 1);
            }}
            src={testimonial.imgUrl[1]}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLength - 1 ? setselected(0) : setselected((prev) => prev + 1);
            }}
            src={testimonial.imgUrl[0]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials3;
