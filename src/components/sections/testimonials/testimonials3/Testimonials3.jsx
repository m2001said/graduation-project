import React, { useState } from "react";
import "./testimonials3.css";
import { useTranslation } from "react-i18next";

const Testimonials3 = ({ template }) => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const testimonial = template.testimonials;

  const [selected, setSelected] = useState(0);
  const tLength = testimonial.testimonials.length;

  const prevImgUrl = testimonial.imgs && testimonial.imgs[1] ? testimonial.imgs[1] : "";
  const nextImgUrl = testimonial.imgs && testimonial.imgs[0] ? testimonial.imgs[0] : "";

  return (
    <div className="testimonials3" id="Testimonials">
      <div className="left-t3">
        <span>{testimonial.title}</span>
        <span className="stroke-text">{testimonial.subtitle}</span>
        <span>{testimonial.description}</span>
        <span>{testimonial.testimonials[selected].description}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>{testimonial.testimonials[selected].name}</span> - {testimonial.testimonials[selected].subtitle}
        </span>
      </div>

      <div className="right-t3">
        <div></div>
        <div></div>

        <img key={selected} src={testimonial.testimonials[selected].imgUrl} alt="" />
        <div className="t3-arrows">
          <img
            onClick={() => {
              setSelected(selected === 0 ? tLength - 1 : selected - 1);
            }}
            src={prevImgUrl}
            alt=""
            className={language === "ar" ? "transform rotate-180" : ""}
          />
          <img
            onClick={() => {
              setSelected(selected === tLength - 1 ? 0 : selected + 1);
            }}
            src={nextImgUrl}
            alt=""
            className={language === "ar" ? "transform rotate-180" : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials3;
