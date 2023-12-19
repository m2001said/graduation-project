import React from "react";
import "./project3.css";
import { useSelector } from "react-redux";

const Project3 = () => {
  const { projects3 } = useSelector((state) => state.template3);
  return (
    <div className="Project3" id="project3">
      <div className="Project3-header">
        <span className="stroke-text">{projects3.title[0].titleA}</span>
        <span> {projects3.title[0].titleB}</span>
        <span className="stroke-text">{projects3.title[0].titleB}</span>
      </div>

      <div className="project3-categories">
        {projects3.programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>{projects3.buttonText}</span>
              <img src={projects3.imgUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project3;
