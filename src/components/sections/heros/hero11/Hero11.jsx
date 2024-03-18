import React from "react";
import "../hero11/hero11.css";
import Header11 from "../hero11/header11/Header11";
import ScorollDown11 from "../hero11/scorollDown11/ScorollDown11.jsx";
import { useSelector } from "react-redux";

const Hero11 = () => {
  const { hero } = useSelector((state) => state.template11);
  return (
    <section className="home11 Container" id="home">
      <div className="intro11">
        <img src={hero.imgUrl} alt="" className="home11__img" />
        <h1 className="home11__name">{hero.title}</h1>
        <span className="home11__eduction">{hero.subtitle}</span>
        <Header11 />
        <a href="#contact" className="btn11">
          {hero.actionButton}
        </a>
        <ScorollDown11 />
      </div>
    </section>
  );
};
export default Hero11;
