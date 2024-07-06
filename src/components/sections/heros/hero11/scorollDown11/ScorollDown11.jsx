import React from "react";
import { useSelector } from "react-redux";

const ScorollDown11 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
  return (
    <div className="scroll__down11">
      <a href="#about" className="mouse11__wrapper">
        <span className="home11__scroll-name">{hero.text}</span>
        <span className="mouse11">
          <span className="wheel11"></span>
        </span>
      </a>
    </div>
  );
};

export default ScorollDown11;
