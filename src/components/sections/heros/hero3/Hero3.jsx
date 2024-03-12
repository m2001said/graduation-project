import React, { useEffect } from "react";
import "./hero3.css";
import Navbar3 from "../../navbars/navbar3/Navbar3";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { hero } = useSelector((state) => state.template3);

  return (
    <div className="hero3" id="Home">
      <div className="blur3 hero-blur"></div>
      <div className="left-h">
        <Navbar3 />

        <div className="the-best-ad">
          <div data-aos="fade-left" data-aos-duration="3000" className="arch-left"></div>
          <span>{hero.Subtitle}</span>
        </div>

        <div className="hero3-text">
          <div>
            <span className="stroke-text">{hero.title.titleA} </span>
            <span>{hero.title.titleB}</span>
          </div>
          <div>
            <span>{hero.title.titleC}</span>
          </div>
          <div>
            <span>{hero.description}</span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>{hero.numCounter.count1}</span>
            <span>{hero.numCounter.descr1}</span>
          </div>
          <div>
            <span>{hero.numCounter.count2}</span>
            <span>{hero.numCounter.descr2}</span>
          </div>
          <div>
            <span>{hero.numCounter.count3}</span>
            <span>{hero.numCounter.descr3}</span>
          </div>
        </div>

        <div className="hero3-button">
          <button className="btn3">{hero.buttonText.buttonTextA}</button>
          <button className="btn3">{hero.buttonText.buttonTextB}</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn33">{hero.buttonText.buttonTextC}</button>
        <img src={hero.imgUrl} alt="" className="hero-image" />

        <div className="hero-image-back1"></div>
        <div className="hero-image-back2"></div>
      </div>
    </div>
  );
};

export default Hero3;
