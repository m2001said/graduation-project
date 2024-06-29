import React from "react";

import "./feature16.css";
// import { useLocation } from "react-router";

const Feature16 = ({ template }) => {
  const feature = template.feature;

  return (
    <section className="features16 section16" id="features">
      <h2 className="section__title16" data-title="Features">
        {feature.title}
      </h2>
      <div className="features__grid16 container16 grid16">
        {feature.feature.map(({ image, title, description }, index) => {
          return (
            <div className="features__item16" key={index}>
              <img src={image} alt="" className="feature__img16" />
              <h3 className="feature__title16">{title}</h3>
              <p className="feature__description16">{description}</p>
              <img src={feature.imgUrl} alt="" className="feature__shape16" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feature16;
