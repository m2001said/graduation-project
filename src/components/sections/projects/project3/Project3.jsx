import React from "react";
import "./project3.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Project3 = () => {
  const { pathname } = useLocation();
  const projects = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.projects;
    } else {
      return state.template3.projects;
    }
  });
  return (
    <div className="Project3" id="Programs">
      <div className="Project3-header">
        {projects.title.map((item, index) => (
          <span key={index} className={index % 2 === 0 ? "stroke-text" : ""}>
            {item.Subtitle}
          </span>
        ))}
      </div>

      <div className="project3-categories">
        {projects.descriptions.map((program, index) => (
          <div className="category" key={index}>
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>{projects.actionButton}</span>
              <img src={projects.imgUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project3;
