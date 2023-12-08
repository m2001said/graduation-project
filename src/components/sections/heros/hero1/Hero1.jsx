import React from "react";

import "./hero.css";
import { useSelector } from "react-redux";

const Hero1 = () => {
  const { hero } = useSelector((state) => state.template);
  return (
    <div className="landing " style={{ backgroundImage: `url(${hero.imgUrl})` }}>
      <div className="overlay"></div>
      <div className="text">
        <div className="content">
          <h2>{hero.title}</h2>
          <p>{hero.description}</p>
          <button className="landing-btn">{hero.buttonText} </button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
