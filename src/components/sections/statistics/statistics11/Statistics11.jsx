import React from "react";

const ServicesBox11 = ({ template }) => {
  const statistics = template.statistics;
  // const { statistics } = useSelector((state) => state.template11);
  return (
    <div className="about___boxes11 grid11">
      {statistics.statistics.map((stat, index) => (
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
