import React from "react";
import { useSelector } from "react-redux";

import "./choose16.css";

const Choose16 = () => {
  const { Choose } = useSelector((state) => state.template16);
  return (
    <section className="choose16 section16">
      <div className="choose__grid16 container16 grid16">
        <div className="choose__content16">
          <h2 className="section__title16" data-title="Why Choose Us">
            {Choose.title}
          </h2>
          <p className="choose_description16">{Choose.description}</p>
          <div className="choose__details16 grid16">
            {Choose.details &&
              Choose.details.map((detail, index) => (
                <div className="choose__details-item16" key={index}>
                  <div className="choose__details-img-wrapper16">
                    <img src={detail.img} alt="" className="choose_details-img16" />
                  </div>
                  <div>
                    <h3 className="choose_details-title16">{detail.title}</h3>
                    <p className="choose_details-description16">{detail.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <img src={Choose.chooseImg} alt="" className="choose__img16" />
      </div>
    </section>
  );
};

export default Choose16;
