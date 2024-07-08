import React from "react";
import "./statistics16.css";

const Statistics16 = ({ template }) => {
  const statistics = template.statistics;

  return (
    <section className="stats16 section16" id={statistics.sectionId}>
      <div className="stats__grid16 container16 grid16">
        {statistics.statistics.map((stat, index) => (
          <div className="stats__item16" key={index}>
            <div className="stats__img-wrapper16">
              <img src={stat.imgUrl} alt="" className="stats__img16" />
            </div>
            <div>
              <p className="stats__no16">{stat.value}</p>
              <h3 className="stats__title16">{stat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics16;
