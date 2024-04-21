import React from "react";
import { useSelector } from "react-redux";
import "./cta4.css";
import { useLocation } from "react-router";
const Cta4 = () => {
  const { pathname } = useLocation();
  const cta = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.cta;
    } else {
      return state.template4.cta;
    }
  });
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">{cta.title}</span>
          <span className="secondaryText">
            {cta.description1}
            <br />
            {cta.description2}
          </span>
          <button className="button">
            <a href={cta.email}> {cta.buttonText}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta4;
