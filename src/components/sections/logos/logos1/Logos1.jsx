import React from "react";
import { useSelector } from "react-redux";
import "./logos.css";

const Logos1 = () => {
  const { logos } = useSelector((state) => state.template);

  return (
    <div className="logos-1">
      {logos.companies.map((logo, index) => (
        <img key={index} src={logo.imgUrl} alt={`Logo ${index + 1}`} />
      ))}
    </div>
  );
};

export default Logos1;
