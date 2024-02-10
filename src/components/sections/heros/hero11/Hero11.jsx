import React from "react";
import "../hero11/hero11.css";
import Header11 from "../hero11/header11/Header11";
import ScorollDown11 from "../hero11/scorollDown11/ScorollDown11.jsx";
import Shapes11 from "../hero11/shapes11/Shapes11.jsx";
import { useSelector } from "react-redux";

const Hero11 = () => {
  const { hero11 } = useSelector((state) => state.template11);

  return (
    <section className="home11 Container" id="home">
      <div className="intro11">
        <img src={hero11[0].imgUrl_Me} alt="" className="home11__img" />
        <h1 className="home11__name">{hero11[0].title1}</h1>
        <span className="home11__eduction">{hero11[0].title2}</span>

        <Header11 />

        <a href="#contact" className="btn11">
          Hire Me
        </a>

        <ScorollDown11 />
        {/* <Shapes11 /> */}
      </div>
    </section>
  );
};

export default Hero11;
