import React from "react";
import "./hero.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Hero1 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="landing design-1 " style={{ backgroundImage: `url(${hero.imgUrl})` }} id={hero.sectionId}>
      <div className="overlay"></div>
      <div className="text">
        <div className="content">
          <h2>{hero.title}</h2>
          <p>{hero.description}</p>
          <button className="landing-btn flex-center gap-2">
            <span>{hero.buttonText}</span>
            <img className={language === "ar" ? "transform rotate-180" : ""} src={hero.icon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
