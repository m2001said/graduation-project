import React from "react";
import "./cta1.css";
const Cta1 = ({ template }) => {
  const cta = template.cta;
  return (
    <div className="cta1-main design-1" id={cta.sectionId}>
      <div className="cta1">
        <h1>{template.cta.title}</h1>
        <p>{template.cta.description}</p>
        <button className="cta1-button">
          <span>{template.cta.buttonText}</span>
          <a href="#cta" className="cta1-button-img">
            <img src={template.cta.icon} alt="" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Cta1;
