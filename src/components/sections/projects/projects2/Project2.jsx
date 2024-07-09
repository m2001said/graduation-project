import React from "react";
import "./projects2.css";
import { useSelector } from "react-redux";
 
const Projects2 = ({ template }) => {
  const ownProjects = useSelector((state) => state.ownTemplate.projects);
  const projects = template ? template.projects : ownProjects;
  return (
    <section id={projects.sectionId} className="pb-24 pt-10 section2 projects2 ">
      <h5>{projects.title}</h5>
      <h2 className="project_h2">{projects.description}</h2>

      <div className="container2 projects2__container">
        {projects.projects.map((item, index) => (
          <article className="projects2__item" key={index}>
            <div className="projects2__item-image">
              <img src={item.imgUrl} alt="" />
            </div>

            <h3>{item.title}</h3>

            <div className="projects2__item-cta">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn2 a2">
                 {item.title}
              </a>
              <a href={item.link} className="btn2  "  target="_blank" rel="noopener noreferrer">
+              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects2;
