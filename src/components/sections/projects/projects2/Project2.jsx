import React from "react";
import "./projects2.css";
 
const Projects2 = ({ template }) => {
  const projects = template.projects;
  return (
    <section id="projects2" className="section2">
      <h5>{projects.title}</h5>
      <h2>{projects.description}</h2>

      <div className="container2 projects2__container">
        {projects.projects.map((item, index) => (
          <article className="projects2__item" key={index}>
            <div className="projects2__item-image">
              <img src={item.imgUrl} alt="" />
            </div>

            <h3>{item.title}</h3>

            <div className="projects2__item-cta">
              <a href={item.url} className="btn2 a2">
                 {item.title}
              </a>
              <a href={item.link} className="btn2  " target="_blank" rel="noopener noreferrer">
+              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects2;
