import React from "react";
import "./cta1.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Cta1 = ({template}) => {
const ownCta = useSelector((state) => state.ownTemplate.cta);
const cta = template ? template.cta : ownCta;
const { i18n } = useTranslation();
const language = i18n.language;

  return (
    <div className="cta1-main design-1" id={cta.sectionId}>
      <div className="cta1">
        <h1>{cta.title}</h1>
        <p>{cta.description}</p>
        <button className="cta1-button">
          <span>{cta.buttonText}</span>
          <a href="#cta" className="cta1-button-img">
            <img src={cta.icon} alt="" className={language === "ar" ? "transform rotate-180" : ""} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Cta1;
