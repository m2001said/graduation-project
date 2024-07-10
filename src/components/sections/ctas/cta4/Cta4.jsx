import React from "react";

import "./cta4.css";

const Cta4 = ({ template }) => {
  const cta = template.cta;
  return (
    <div id="get-started" className="g-wrapper4" id={cta.sectionId}>
      <div className="paddings4 innerWidth4 g-container4">
        <div className="flexColCenter4 inner-container4">
          <span className="primaryText4">{cta.title}</span>
          <span className="secondaryText4">
            {cta.description}
            <br />
            {cta.text}
          </span>
          <button className="button4">
            <a href={cta.email}> {cta.buttonText}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta4;
