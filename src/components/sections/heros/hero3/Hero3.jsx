import React, { useEffect } from "react";
import "./hero3.css";
import Navbar3 from "../../navbars/navbar3/Navbar3";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router";

const Hero3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template3.hero;
    }
  });

  if (!hero) {
    return null;
  }
  return (
    <div className="hero3" id="Home">
      <div className="blur3 hero-blur"></div>
      <div className="left-h">
        {/* <Navbar3/> */}

        <div className="the-best-ad">
          <div data-aos="fade-left" data-aos-duration="3000" className="arch-left"></div>
          <span>{hero.Subtitle}</span>
        </div>

        <div className="hero3-title">
          <div>
            <span className="stroke-text">{hero.title}</span>
          </div>
          <div className="hero3-description">
            <span>{hero.description}</span>
          </div>
        </div>

        <div className="figures">
          {hero.statistics.map((counter) => (
            <div key={counter.description}>
              <span>{counter.count}</span>
              <span>{counter.description}</span>
            </div>
          ))}
        </div>

        <div className="hero3-button">
          <button className="btn3">{hero.Button.primaryButton}</button>
          <button className="btn3">{hero.Button.secondaryButton}</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn33">{hero.Button.actionButton}</button>
        <img src={hero.imgUrl} alt="" className="hero-image" />

        <div className="hero-image-back1"></div>
        <div className="hero-image-back2"></div>
      </div>
    </div>
  );
};

export default Hero3;
