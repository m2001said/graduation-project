import React from "react";
import "./cta1.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
const Cta1 = () => {
  const { pathname } = useLocation();
  const cta = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.cta;
    } else {
      return state.template1.cta;
    }
  });
  return (
    <div className="cta1-main design-1">
      <div className="cta1">
        <h1>{cta.title}</h1>
        <p>{cta.description}</p>
        <button className="cta1-button">
          <span>{cta.buttonText}</span>
          <a href="#cta" className="cta1-button-img">
            <img src={cta.icon} alt="" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Cta1;
