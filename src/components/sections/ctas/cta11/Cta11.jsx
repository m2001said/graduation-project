import React from "react";
import "../cta11/cta11.css";
import Card11 from "./Card11";

const Cta11 = ({ template }) => {
  const cta = template.cta;

  return (
    <section className="resume11 pt-10 md:pt-16" id="resume">
      <h2 className="section__title11">{cta.title}</h2>
      <div className="resume__container11">
        <div className="timeline11 grid11">
          {cta.educations.map((item, index) => (
            <Card11 key={index} icon={item.imgUrl} title={item.title} year={item.year} description={item.description} />
          ))}
        </div>
        <div className="timeline11 grid11">
          {cta.experiences.map((item, index) => (
            <Card11 key={index} icon={item.imgUrl} title={item.title} year={item.year} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta11;
