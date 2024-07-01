import React from "react";
import "./hero.css";
const Hero1 = ({ template }) => {
  const hero = template.hero;
  return (
    <div className="landing design-1 " style={{ backgroundImage: `url(${hero.imgUrl})` }}>
      <div className="overlay"></div>
      <div className="text">
        <div className="content">
          <h2>{hero.title}</h2>
          <p>{hero.description}</p>
          <button className="landing-btn flex-center gap-2">
            <span>{hero.buttonText}</span>
            <img src={hero.icon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
