import React from "react";
import "../cta11/cta11.css";
import ResumeData11 from "../cta11/resumeData11";
import Card11 from "./Card11";

const Cta11 = () => {
  const resume11 = ResumeData11();

  return (
    <section className="resume11 container section" id="resume">
      <h2 className="section__title11">Experience</h2>
      <div className="resume__container11 grid11">
        <div className="timeline11 grid11">
          {resume11.map((val, id) => {
            if (val.category === "education") {
              return <Card11 key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />;
            }
          })}
        </div>

        <div className="timeline11 grid11">
          {resume11.map((val, index) => {
            if (val.category === "experience") {
              return <Card11 key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Cta11;
