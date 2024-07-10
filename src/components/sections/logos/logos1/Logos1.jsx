import React from "react";
import "./logos.css";
const Logos1 = ({ template }) => {
  const logos = template.logos;
  return (
    <div className="logos-1 flex" id={logos.sectionId}>
      {template.logos.companies.map((logo, index) => (
        <img key={index} src={logo.imgUrl} alt={`Logo ${index + 1}`} />
      ))}
    </div>
  );
};

export default Logos1;
