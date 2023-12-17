import React from "react";
import "./hero2.css";
import ME from "../../../../assets/images2/me-about.jpg";
import { FiAward } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";
import { FaFolderTree } from "react-icons/fa6";

const About2 = () => {
  return (
    <section id="about2">
      <h5>Get to know </h5>
      <h2>About Me</h2>
      <div className="container about2__container">
        <div className="about2__me">
          <div className="about2__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about2__content">
          <div className="about2__cards">
            <article className="about2__card">
              <FiAward className="about2__icon" />

              <h5>Experience</h5>
              <small>3+Years Working</small>
            </article>
            <article className="about2__card">
              <FaUsers className="about2__icon" />

              <h5>Clients</h5>

              <small>300+ Clients Worldwide</small>
            </article>
            <article className="about2__card">
              <FaFolderTree className="about2__icon" />

              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div>
          <p>
            lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum
            dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem
            ipsum dolor sit lorem ipsum dolor sit
          </p>
          <a href="#contactUs2" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About2;
