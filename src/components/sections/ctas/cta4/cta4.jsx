import React from "react";
import { useSelector } from "react-redux";
import "./cta4.css";
const Cta4 = () => {
  const { Cta4 } = useSelector((state) => state.template4);
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">{Cta4.title}</span>
          <span className="secondaryText">
            {Cta4.description1}
            <br />
            {Cta4.description2}
          </span>
          <button className="button">
            <a href={Cta4.email}> {Cta4.buttonText}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta4;
