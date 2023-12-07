import React from "react";
import "./pricing1.css";
import { useSelector } from "react-redux";

const cardData = [
  {
    features: ["General living space advices", "Renovation advices", "Interior design advices", "Furniture reorganization", "Up to 5 hours meetings"],
    buttonClass: "pricing-card-button1",
    // Vector: Vector1,
    cardClass: "pricing1-card1",
  },
  {
    Plans: "Most Popular Plans",
    features: ["Complete home redesign", "Interior and exterior works", "Modular interior planning", "Kitchen design", "Garages organization"],
    buttonClass: "pricing-card-button2",
    // Vector: Vector2,
    cardClass: "pricing1-card2",
  },
  {
    features: ["Furniture for living room", "Furniture refurbishment", "Sofas and armchairs", "Tables and chairs", "Kitchens"],
    buttonClass: "pricing-card-button3",
    // Vector: Vector1,
    cardClass: "pricing1-card3",
  },
];

const Pricing1 = () => {
  const { pricing } = useSelector((state) => state.template);

  return (
    <div className="pricing1">
      <div className="pricing1-head">
        <h1>{pricing.title}</h1>
        <p>{pricing.description}</p>
      </div>
      <div className="pricing1-mainCards">
        {pricing.blocks.map((card, index) => (
          <div key={index} className={`pricing1-card ${card.cardClass}`}>
            <h3 className="pricing1-card-title">{card.plan}</h3>
            <h1>
              <span>{card.moneyUnit}</span>
              {card.price}
            </h1>
            <span>{card.timeUnit}</span>
            <hr></hr>
            <h6 className="card-Popular-Plan">{card.PopularPlan}</h6>
            {/* {card.features.map((feature, i) => (
              <p key={i}>{feature}</p>
            ))} */}
            <button className={`pricing-card-button ${card.buttonClass}`}>
              <span> Get started </span>
              <img src={card.Vector} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing1;
