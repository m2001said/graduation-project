import React from "react";
import "./pricing1.css";
import { useSelector } from "react-redux";



const Pricing1 = () => {
  const { pricing } = useSelector((state) => state.template1);

  return (
    <div className="pricing1">
      <div className="pricing1-head">
        <h1>{pricing.title}</h1>
        <p>{pricing.description}</p>
      </div>
      <div className="pricing1-mainCards">
        {pricing.blocks.map((card, index) => (
          <div key={index} className={`pricing1-card${index}`}>
            <h3 className="pricing1-card-title">{card.plan}</h3>
            <h1>
              <span>{card.moneyUnit}</span>
              {card.price}
            </h1>
            <span className="pricing1-timeUnit">{card.timeUnit}</span>
            <hr></hr>
            <h6>{card.PopularPlan}</h6>
            {card.features.map((feature, i) => (
              <p className="pricing1-feature" key={i}>{feature}</p>
            ))}
            <button className={`pricing-card-button${index}`}>
              <span> {card.buttonText} </span>
              <a href={" #"}>
                    <img src={card.icon} alt="icon" />
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing1;
