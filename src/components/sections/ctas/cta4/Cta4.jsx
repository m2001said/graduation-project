import React from "react";

import "./cta4.css";

const Cta4 = ({ template }) => {
  const cta = template.cta;
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
