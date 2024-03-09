import React from "react";
import "./projects2.css";
import { useSelector } from "react-redux";

const Projects2 = () => {
  const { projects } = useSelector((state) => state.template2);

  return (
    <section id="projects2">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects2__container">
        {projects.cards.map((item, index) => (
          <article className="projects2__item" key={index}>
            <div className="projects2__item-image">
              <img src={item.image} alt="" />
            </div>

            <h3>{item.title}</h3>

            <div className="projects2__item-cta">
              <a href={item.githubLink} className="btn-2">
                Github
              </a>
              <a href={item.demoLink} className="btn-2 btn-primary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects2;
