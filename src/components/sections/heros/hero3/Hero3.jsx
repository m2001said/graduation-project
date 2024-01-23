import React, { useEffect } from "react";
import "./hero3.css";
import Navbar3 from "../../navbars/navbar3/Navbar3";
import NumberCounter from "number-counter";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { hero3 } = useSelector((state) => state.template3);

  return (
    <div className="hero3">
      <div className="blur3 hero-blur"></div>
      <div className="left-h">
        <Navbar3 />

        {/* the best ad */}
        <div className="the-best-ad">
          <div data-aos="fade-left" data-aos-duration="3000" className="arch-left"></div>
          <span>{hero3.Subtitle}</span>
        </div>

        {/* Hero Heading */}
        <div className="hero3-text">
          <div>
            <span className="stroke-text">{hero3.title[0].titleA} </span>
            <span>{hero3.title[0].titleB}</span>
          </div>
          <div>
            <span>{hero3.title[0].titleC}</span>
          </div>
          <div>
            <span>{hero3.description}</span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={parseInt(hero3.numCounter[0].count1, 10)} start={100} delay="4" preFix="+" />
            </span>
            <span>{hero3.numCounter[0].descr1}</span>
          </div>
          <div>
            <span>
              <NumberCounter end={parseInt(hero3.numCounter[0].count2, 10)} start={800} delay="4" preFix="+" />
            </span>
            <span>{hero3.numCounter[0].descr2}</span>
          </div>
          <div>
            <span>
              <NumberCounter end={parseInt(hero3.numCounter[0].count3, 10)} start={0} delay="4" preFix="+" />
            </span>
            <span>{hero3.numCounter[0].descr3}</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero3-button">
          <button className="btn">{hero3.buttonText[0].buttonTextA}</button>
          <button className="btn">{hero3.buttonText[0].buttonTextB}</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">{hero3.buttonText[0].buttonTextC}</button>
        {/* hero images */}
        <img src={hero3.imgUrl} alt="" className="hero-image" />

        <div className="hero-image-back1"></div>
        <div className="hero-image-back2"></div>
      </div>
    </div>
  );
};

export default Hero3;
