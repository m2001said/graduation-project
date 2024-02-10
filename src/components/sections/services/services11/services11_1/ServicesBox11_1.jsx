import React from "react";
import { useSelector } from "react-redux";

const ServicesBox11 = () => {
  const { ServicesBox11 } = useSelector((state) => state.template11);

  return (
    <div className="about___boxes11 grid11">
      <div className="about__box11">
        <img src={ServicesBox11[0].imgUrl.imgUrl_Fire} alt="" className="about__icon11" />
        <div>
          <h3 className="about__title11">{ServicesBox11[0].number11.num1}</h3>
          <span className="about__subtitle11">{ServicesBox11[0].paragraf11.p1}</span>
        </div>
      </div>
      <div className="about__box11">
        <img src={ServicesBox11[0].imgUrl.imgUrl_Cup} alt="" className="about__icon11" />

        <div>
          <h3 className="about__title11">{ServicesBox11[0].number11.num2}</h3>
          <span className="about__subtitle11">{ServicesBox11[0].paragraf11.p2}</span>
        </div>
      </div>
      <div className="about__box11">
        <img src={ServicesBox11[0].imgUrl.imgUrl_People} alt="" className="about__icon11" />

        <div>
          <h3 className="about__title11">{ServicesBox11[0].number11.num3}</h3>
          <span className="about__subtitle11">{ServicesBox11[0].paragraf11.p3}</span>
        </div>
      </div>

      <div className="about__box11">
        <img src={ServicesBox11[0].imgUrl.imgUrl_Badge} alt="" className="about__icon11" />

        <div>
          <h3 className="about__title11">{ServicesBox11[0].number11.num4}</h3>
          <span className="about__subtitle11">{ServicesBox11[0].paragraf11.p4}</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesBox11;
