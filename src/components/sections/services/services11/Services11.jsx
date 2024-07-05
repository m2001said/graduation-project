import React from "react";
import "./services11.css";
import ServicesBox11 from "./ServicesBox11_1";

const Services11 = ({ template }) => {
  const services = template.services;
  return (
    <section className="about" id="about">
      <h2 className="section__title11">{services.title}</h2>
      <div className="flex items-center justify-center gap-10 flex-wrap py-10 md:py-16">
        <img src={services.imgUrl} alt="" className="" />
        <div className="about__data11 grid11">
          <div className="about__info11">
            <p className="about__description11">{services.description}</p>
            <a href="" className="btn11" id="btn11_1">
              {services.buttonText}
            </a>
          </div>
          <div className="about__skills11 grid11">
            {services.services.map((statistic, index) => (
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
      <ServicesBox11 template={template} />
    </section>
  );
};
export default Services11;
