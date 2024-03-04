import React from "react";
import "./project3.css";
import { useSelector } from "react-redux";

const Project3 = () => {
  const { projects } = useSelector((state) => state.template3);
  return (
    <div className="Project3" id="Programs">
      <div className="Project3-header">
        <span className="stroke-text">{projects.title.titleA}</span>
        <span> {projects.title.titleB}</span>
        <span className="stroke-text">{projects.title.titleB}</span>
      </div>

      <div className="project3-categories">
        {projects.programsData.map((program, index) => (
          <div className="category" key={index}>
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>{projects.buttonText}</span>
              <img src={projects.imgUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project3;
