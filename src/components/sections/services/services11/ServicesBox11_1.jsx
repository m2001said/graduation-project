import React from "react";
import { useSelector } from "react-redux";

const ServicesBox11 = ({ template }) => {
  const ownStatistics = useSelector((state) => state.ownTemplate.statistics);
  const statistic = template ? template.statistics : ownStatistics;

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
