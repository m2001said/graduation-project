import React from "react";
import "./hero2.css";

const Hero2 = ({ template }) => {
  const hero = template.hero;
  return (
    <section id="hero2">
      <h5>{hero.title}</h5>
      <h2>{hero.subtitle}</h2>
      <div className="container hero2__container">
        <div className="hero2__me">
          <div className="hero2__me-image">
            <img src={hero.imgUrl} alt="" />
          </div>
        </div>

        <div className="hero2__content">
          <div className="hero2__cards">
            {hero.heros.map((heros, index) => (
              <article className="hero2__card" key={index}>
                <img className="hero2__icon" src={heros.icon} alt={heros.title} />
                <h5>{heros.title}</h5>
                <small>{heros.description}</small>
              </article>
            ))}
          </div>
          <p>{hero.description}</p>
          <a href="#contactUs2" className="btn btn-letstalk">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
