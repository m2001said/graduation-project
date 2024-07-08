import React from "react";
import "./feature11.css";
import { useSelector } from "react-redux";

const Feature11 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.features);
  const features = template ? template.features : ownFooter;

  return (
    <section className="blog11 py-4 md:py-10" id={features.sectionId}>
      <h2 className="section__title11">{features.title}</h2>
      <div className="blog__container11">
        {features.features.map((card, index) => (
          <div className="blog__card11" key={index}>
            <div className="blog__thumb11">
              <a href="#">
                <span className="blog__category11">{card.title}</span>
              </a>
              <a href="#">
                <img src={card.imgUrl} alt="" className="blog__img11" />
              </a>
            </div>
            <div className="blog__details11">
              <h3 className="blog__title11">{card.description}</h3>
              <div className="blog__meta11">
                <span>{card.date}</span>
                <span className="blog__dot">.</span>
                <span>{card.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature11;
