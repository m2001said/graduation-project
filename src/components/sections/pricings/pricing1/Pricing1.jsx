import React from "react";
import "./pricing1.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";


const Pricing1 = ({ template }) => {
  const ownPricing = useSelector((state) => state.ownTemplate.pricing);
  const pricing = template ? template.pricing : ownPricing;
  const { i18n } = useTranslation();
  const language = i18n.language;
  return (
    <div className="pricing1 design-1">
      <div className="pricing1-head">
        <h1>{template.pricing.title}</h1>
        <p>{template.pricing.description}</p>
      </div>
      <div className="pricing1-mainCards">
        {pricing.plans.map((card, index) => (
          // <div key={index} className={`pricing1-card${index}`}>
          <div key={index} className={index % 2 === 0 ? "pricing1-even-card" : "pricing1-odd-card"}>
            <h3 className="pricing1-card-title">{card.title}</h3>
            <h1>
              <span>{card.moneyUnit}</span>
              {card.price}
            </h1>
            <span className="pricing1-timeUnit">/{card.timeUnit}</span>
            <hr></hr>
            {card.features.map((feature, i) => (
              <p className="pricing1-feature" key={i}>
                {feature}
              </p>
            ))}
            {/* <button className={`pricing-card-button${index}`}> */}
            <button className={index % 2 === 0 ? "even-card-button" : "odd-card-button"}>
              <span> {card.buttonText} </span>
              <a href={" #"}>
                <img src={card.icon} alt="icon" className={language === "ar" ? "transform rotate-180" : ""} />
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing1;
