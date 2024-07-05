import React from "react";

const ServicesBox11 = ({ template }) => {
  const statistic = template.statistics;
  return (
    <div className="flex flex-wrap items-center justify-between gap-8 px-6 py-10 md:py-20">
      {statistic.statistics.map((stat, index) => (
        <div key={index} className="about__box11">
          <img src={stat.imgUrl} alt="" className="about__icon11" />
          <div>
            <h3 className="about__title11">{stat.title}</h3>
            <span className="about__subtitle11">{stat.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesBox11;
