import React, { useEffect } from "react";
import "./hero3.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const Hero3 = ({ template }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
  if (!hero) {
    return null;
  }

  return (
    <div className="hero3" id={hero.sectionId}>
      <div className="blur3 hero-blur"></div>
      <div className="left-h">
        <div className="the-best-ad">
          <div data-aos="fade-up" data-aos-duration="3000" className="arch-left"></div>
          <span>{hero.subtitle}</span>
        </div>

        <div className="hero3-title">
          <div>
            <span className="stroke-text">{hero.title}</span>
          </div>
          <div className="hero3-description">
            <span>{hero.description}</span>
          </div>
        </div>

        {/* <div className="figures">
          {hero.heros.map((counter, index) => (
            <div key={index}>
              <span>{counter.count}</span>
              <span>{counter.description}</span>
            </div>
          ))}
        </div> */}

        <div className="hero3-button">
          <button className="btn3">{hero.buttonText}</button>
          <button className="btn3">{hero.linkText}</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn33">{hero.text}</button>
        <img src={hero.imgUrl} alt="" className="hero-image" />

        <div className="hero-image-back1"></div>
        <div className="hero-image-back2"></div>
      </div>
    </div>
  );
};

export default Hero3;
