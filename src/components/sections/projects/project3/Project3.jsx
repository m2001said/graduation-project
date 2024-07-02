import React from "react";
import "./project3.css";

const Project3 = ({ template }) => {
  return (
    <div className="Project3" id="programs">
      <div className="Project3-header">
        <span className="stroke-text">{template.projects.title}</span>
        <span>{template.projects.subtitle}</span>
        <span className="stroke-text">{template.projects.description}</span>
      </div>

      <div className="project3-categories">
        {template.projects.projects &&
          template.projects.projects.map((program, index) => (
            <div className="category" key={index}>
              <span>{program.title}</span>
              <span>{program.description}</span>
              <div className="join-now">
                <span>{template.projects.buttonText}</span>
                <img src={template.projects.imgUrl} alt="" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Project3;
