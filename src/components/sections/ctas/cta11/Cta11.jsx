import React from "react";
import "../cta11/cta11.css";
import { useSelector } from "react-redux";
import Card11 from "./Card11";

const Cta11 = () => {
  const { cta } = useSelector((state) => state.template11);
  return (
    <section className="resume11 container section" id="resume">
      <h2 className="section__title11">Experience</h2>
      <div className="resume__container11 grid11">
        <div className="timeline11 grid11">
          {cta.educations.map((item) => (
            <Card11 key={item.id} icon={item.imgUrl} title={item.title} year={item.year} desc={item.desc} />
          ))}
        </div>
        <div className="timeline11 grid11">
          {cta.experiences.map((item) => (
            <Card11 key={item.id} icon={item.imgUrl} title={item.title} year={item.year} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Cta11;
