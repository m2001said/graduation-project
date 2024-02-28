import React from "react";
import { useSelector } from "react-redux";

const ScorollDown11 = () => {
  const { header } = useSelector((state) => state.template11);
  return (
    <div className="scroll__down11">
      <a href="#about" className="mouse11__wrapper">
        <span className="home11__scroll-name">{header.title}</span>
        <span className="mouse11">
          <span className="wheel11"></span>
        </span>
      </a>
    </div>
  );
};
export default ScorollDown11;
