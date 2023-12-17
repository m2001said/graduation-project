import React from "react";
import "./projects2.css";
import IMG1 from "../../../../assets/images2/portfolio1.jpg";
import IMG2 from "../../../../assets/images2/portfolio2.jpg";
import IMG3 from "../../../../assets/images2/portfolio3.jpg";
import IMG4 from "../../../../assets/images2/portfolio4.jpg";
import IMG5 from "../../../../assets/images2/portfolio5.png";
import IMG6 from "../../../../assets/images2/portfolio6.jpg";

const projects2Items = [
  {
    image: IMG1,
    title: "projects2 Item 1",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
  {
    image: IMG2,
    title: "projects2 Item 2",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
  {
    image: IMG3,
    title: "projects2 Item 3",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
  {
    image: IMG4,
    title: "projects2 Item 4",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
  {
    image: IMG5,
    title: "projects2 Item 5",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
  {
    image: IMG6,
    title: "projects2 Item 6",
    githubLink: "https://github.com",
    demoLink: "https://dribbble.com/Alien_pixels",
  },
];

const projects2 = () => {
  return (
    <section id="projects2">
      <h5>My Recent Work</h5>
      <h2>projects2</h2>

      <div className="container projects2__container">
        {projects2Items.map((item, index) => (
          <article className="projects2__item" key={index}>
            <div className="projects2__item-image">
              <img src={item.image} alt="" />
            </div>

            <h3>{item.title}</h3>

            <div className="projects2__item-cta">
              <a href={item.githubLink} className="btn">
                Github
              </a>
              <a href={item.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default projects2;
