import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const ScorollDown11 = () => {
  // const { hero } = useSelector((state) => state.template11);
  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template11.hero;
    }
  });
  return (
    <div className="scroll__down11">
      <a href="#about" className="mouse11__wrapper">
        <span className="home11__scroll-name">{hero.actionScroll}</span>
        <span className="mouse11">
          <span className="wheel11"></span>
        </span>
      </a>
    </div>
  );
};

export default ScorollDown11;
