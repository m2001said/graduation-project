import React from "react";
import "./hero12.css";
import { useSelector } from "react-redux";

const Hero12 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
  return (
    <div className="hero12 container12" id={hero.sectionId}>
      <div className="hero-text12">
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
        <button className="btn12">
          {hero.buttonText} <img src={hero.icon} alt="arrow" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero12;
