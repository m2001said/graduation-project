import React from "react";

import "./feature16.css";
import { useSelector } from "react-redux";
// import { useLocation } from "react-router";

const Feature16 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.features);
  const features = template ? template.features : ownFooter;
  return (
    <section className="features16 section16" id={features.sectionId}>
      <h2 className="section__title16" data-title="Features">
        {features.title}
      </h2>
      <div className="features__grid16 container16 grid16">
        {features.features.map(({ imgUrl, title, description }, index) => {
          return (
            <div className="features__item16" key={index}>
              <img src={imgUrl} alt="" className="feature__img16" />
              <h3 className="feature__title16">{title}</h3>
              <p className="feature__description16">{description}</p>
              <img src={features.imgUrl} alt="" className="feature__shape16" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feature16;
