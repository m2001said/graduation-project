import React from "react";
import { useSelector } from "react-redux";
import "./statistics16.css";

const Statistics16 = () => {
  const { Statistics } = useSelector((state) => state.template16);

  return (
    <section className="stats16 section16">
      <div className="stats__grid16 container16 grid16">
        {Statistics.Statistics.map((stat, index) => (
          <div className="stats__item16" key={index}>
            <div className="stats__img-wrapper16">
              <img src={stat.image} alt="" className="stats__img16" />
            </div>
            <div>
              <p className="stats__no16">{stat.number}</p>
              <h3 className="stats__title16">{stat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics16;
