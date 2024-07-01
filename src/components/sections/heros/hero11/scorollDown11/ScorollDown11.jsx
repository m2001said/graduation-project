import React from "react";

const ScorollDown11 = ({ template }) => {
  const hero = template.hero;

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
