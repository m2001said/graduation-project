import React, { useRef } from "react";
import "./testimonials12.css";
var nextIcon = "https://res.cloudinary.com/di8kjrflu/image/upload/v1720131505/next-icon_qzzhmz.png";
var backIcon = "https://res.cloudinary.com/di8kjrflu/image/upload/v1720131485/back-icon_mi8ovh.png";

const Testimonials12 = ({ template }) => {
  const testimonials = template.testimonials;
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials12">
      <img src={nextIcon} alt="testimonials" className="next-btn12" onClick={slideForward} />
      <img src={backIcon} alt="testimonials" className="back-btn12 " onClick={slideBackward} />
      <div className="slider12">
        <ul ref={slider}>
          {testimonials.testimonials.map((testimonial, index) => (
            <li key={index}>
              <div className="slide12">
                <div className="user-info12">
                  <img src={testimonial.imgUrl} alt="user-img" className="icon12" />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <p>{testimonial.opinion}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials12;
