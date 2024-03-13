import React from "react";
import { useSelector } from "react-redux";

const ServicesBox11 = () => {
  const { servicesBox } = useSelector((state) => state.template11);
  return (
    <div className="about___boxes11 grid11">
      <div className="about__box11">
        <img src={servicesBox.imgUrl[0]} alt="" className="about__icon11" />
        <div>
          <h3 className="about__title11">{servicesBox.number11.num1}</h3>
          <span className="about__subtitle11">{servicesBox.paragraf11.p1}</span>
        </div>
      </div>
      <div className="about__box11">
        <img src={servicesBox.imgUrl[1]} alt="" className="about__icon11" />
        <div>
          <h3 className="about__title11">{servicesBox.number11.num2}</h3>
          <span className="about__subtitle11">{servicesBox.paragraf11.p2}</span>
        </div>
      </div>
      <div className="about__box11">
        <img src={servicesBox.imgUrl[2]} alt="" className="about__icon11" />
        <div>
          <h3 className="about__title11">{servicesBox.number11.num3}</h3>
          <span className="about__subtitle11">{servicesBox.paragraf11.p3}</span>
        </div>
      </div>
      <div className="about__box11">
        <img src={servicesBox.imgUrl[3]} alt="" className="about__icon11" />
        <div>
          <h3 className="about__title11">{servicesBox.number11.num4}</h3>
          <span className="about__subtitle11">{servicesBox.paragraf11.p4}</span>
        </div>
      </div>
    </div>
  );
};
export default ServicesBox11;
