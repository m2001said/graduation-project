import React from "react";
import "./hero2.css";
import { useSelector } from "react-redux";

const Hero2 = () => {
  const { hero } = useSelector((state) => state.template2);

  return (
    <section id="hero2">
      <h5>{hero.title}</h5>
      <h2>{hero.subtitle}</h2>
      <div className="container hero2__container">
        <div className="hero2__me">
          <div className="hero2__me-image">
            <img src={hero.image} alt="" />
          </div>
        </div>

        <div className="hero2__content">
          <div className="hero2__cards">
            {hero.cards.map((card, index) => (
              <article className="hero2__card" key={index}>
                <img className="hero2__icon" src={card.icon} alt={card.title} />
                <h5>{card.title}</h5>
                <small>{card.content}</small>
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
