import React from "react";
import "./project3.css";
import { useSelector } from "react-redux";

const Project3 = ({ template }) => {
  const ownProjects = useSelector((state) => state.ownTemplate.projects);
  const projects = template ? template.projects : ownProjects;

  return (
    <div className="Project3" id={projects.sectionId}>
      <div className="Project3-header">
        <span className="stroke-text">{projects.title}</span>
        <span>{projects.subtitle}</span>
        <span className="stroke-text">{projects.description}</span>
      </div>

      <div className="project3-categories">
        {projects.projects &&
          projects.projects.map((program, index) => (
            <div className="category" key={index}>
              <span>{program.title}</span>
              <span>{program.description}</span>
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
