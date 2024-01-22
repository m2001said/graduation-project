import React from "react";
import "./hero3.css";
import Navbar3 from "../../navbars/navbar3/Navbar3";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Hero3 = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  const { hero3 } = useSelector((state) => state.template3);

  return (
    <div className="hero3">
      <div className="blur3 hero-blur"></div>
      <div className="left-h">
        <Navbar3 />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div initial={{ left: mobile ? "165px" : "238px" }} whileInView={{ left: "8px" }} transition={{ ...transition, type: "tween" }}></motion.div>
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

        {/* Hero Buttoms */}
        <div className="hero3-button">
          <buttons className="btn">{hero3.buttonText[0].buttonTextA}</buttons>
          <buttons className="btn">{hero3.buttonText[0].buttonTextB}</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">{hero3.buttonText[0].buttonTextC}</button>

        {/* hero images */}
        <img src={hero3.imgUrl} alt="" className="hero-image" />

        <div className="hero-image-back1" initial={{ right: "11rem" }} whileInView={{ right: "20rem" }} transition={transition}></div>
        <div className="hero-image-back2" initial={{ right: "11rem" }} whileInView={{ right: "20rem" }} transition={transition}></div>
      </div>
    </div>
  );
};

export default Hero3;
