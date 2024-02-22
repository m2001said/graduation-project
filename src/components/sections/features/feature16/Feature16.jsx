import React from "react";
import { useSelector } from "react-redux";
import "./feature16.css";

const Feature16 = () => {
  const { feature } = useSelector((state) => state.template16);

  return (
    <section className="features16 section16" id="features">
      <h2 className="section__title16" data-title="Features">
        {feature.title}
      </h2>
      <div className="features__grid16 container16 grid16">
        {feature.data.map(({ img, title, description }, index) => {
          return (
            <div className="features__item16" key={index}>
              <img src={img} alt="" className="feature__img16" />
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
