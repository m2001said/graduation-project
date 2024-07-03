import React from "react";
import "../hero11/hero11.css";
import Header11 from "../hero11/header11/Header11";
import ScorollDown11 from "../hero11/scorollDown11/ScorollDown11.jsx";

const Hero11 = ({ template }) => {
  const hero = template.hero;

  return (
    <section className="home11 Container" id="home">
      <div className="intro11">
        <img src={hero.imgUrl} alt="" className="home11__img" />
        <h1 className="home11__name">{hero.title}</h1>
        <span className="home11__eduction">{hero.subtitle}</span>

        <Header11 template={template} />
        <a href="#contact" className="btn11">
          {hero.buttonText}
        </a>
        <ScorollDown11 template={template} />
      </div>
    </section>
  );
};
export default Hero11;
