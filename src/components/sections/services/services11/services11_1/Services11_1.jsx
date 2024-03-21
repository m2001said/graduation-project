import React from "react";
import "../services11_1/services11_1.css";
import ServicesBox11 from "./ServicesBox11_1";
import { useSelector } from "react-redux";

const Services11 = () => {
  const { services } = useSelector((state) => state.template11);
  return (
    <section className="about container section11" id="about">
      <h2 className="section__title11">{services.title}</h2>
      <div className="about11__container grid11">
        <img src={services.imgUrl} alt="" className="aboutImg11" />
        <div className="about__data11 grid11">
          <div className="about__info11">
            <p className="about__description11">{services.content}</p>
            <a href="" className="btn11" id="btn11_1">
              {services.actionButton}
            </a>
          </div>
          <div className="about__skills11 grid11">
            {services.statistics.map((statistic, index) => (
              <div key={index} className="skills__data11">
                <div className="skills__titles11">
                  <h3 className="skills__name11">{statistic.title}</h3>
                  <span className="skills__number11">{statistic.value}</span>
                </div>
                <div className="skills__bar11">
                  <span className={`skills__percentage11 ${statistic.title.toLowerCase().replace(/\s/g, "-")}`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ServicesBox11 />
    </section>
  );
};
export default Services11;
