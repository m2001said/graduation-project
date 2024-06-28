import React from "react";
import "./logos.css";
const Logos1 = ({template}) => {
  return (
    <div className="logos-1 flex">
      {template.logos.companies.map((logo, index) => (
        <img key={index} src={logo.imgUrl} alt={`Logo ${index + 1}`} />
      ))}
    </div>
  );
};

export default Logos1;
