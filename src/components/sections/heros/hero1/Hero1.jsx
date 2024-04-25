import React from "react";

import "./hero.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Hero1 = () => {
  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template1.hero;
    }
  });
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
