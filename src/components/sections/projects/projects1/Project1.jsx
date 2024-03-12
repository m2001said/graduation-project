import React from "react";
import "./project1.css";
import { useSelector } from "react-redux";

const Project1 = () => {
  const { projects } = useSelector((state) => state.template1);

  return (
    <div className="projects1 design-1">
      <div className="projects1-header">
        <p className="title-1">{projects.title}</p>
        <p className="description-1">{projects.description}</p>
      </div>
      <div className="projects1-cards">
        {projects.projects.map((cards , index) => (
          <div className="projects1-card" key={cards.title + index}>
            <div className="projects1-card-img">
              <img src={cards.imgUrl} alt="Article 1" />
            </div>
            <div className="projects1-card-info">
              <div className="projects1-card-details">
                <h1>{cards.title}</h1>
                <p>{cards.description}</p>
              </div>
              <a href={"/#"} className="projects1-card-link">
                <span>
                  <img src={cards.icon} alt="icon" />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project1;
