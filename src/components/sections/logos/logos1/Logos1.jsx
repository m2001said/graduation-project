import React from "react";
import { useSelector } from "react-redux";
import "./logos.css";
import { useLocation } from "react-router";

const Logos1 = () => {
  const { pathname } = useLocation();
  const logos = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.logos;
    } else {
      return state.template1.logos;
    }
  });
  return (
    <div className="logos-1 flex">
      {logos.companies.map((logo, index) => (
        <img key={index} src={logo.imgUrl} alt={`Logo ${index + 1}`} />
      ))}
    </div>
  );
};

export default Logos1;
