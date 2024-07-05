import React from 'react';
import "./hero5.css";
import { useSelector } from 'react-redux';

const Hero5 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
  return (
    <div className="hero5 design5">
      <div className="hero5-mainText">
        <h1>{hero.title}</h1>
      </div>
      <div className="hero5-imeges">
        <div className="hero5-videoDiv">
          <video src={hero.videoUrl} autoPlay muted loop className="hero5-imeges-video"></video>
        </div>
        <img src={hero.imgUrl} className="hero5-plane-image" alt="" />
      </div>
    </div>
  );
};

export default Hero5