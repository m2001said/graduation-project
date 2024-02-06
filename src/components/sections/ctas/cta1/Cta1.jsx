import React from "react";
import "./cta1.css";
import { useSelector } from "react-redux";
const Cta1 = () => {
  const { cta} = useSelector((state) => state.template1);
  return (
    <div className="cta1-main">
      <div className="cta1">
        <h1>{cta.title}</h1>
        <p>{cta.description}</p>
        <button className="cta1-button">
          <span>{cta.buttonText}</span>
          <a href="#cta" className="cta1-button-img">
          <img  src={cta.icon} alt="" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Cta1;
