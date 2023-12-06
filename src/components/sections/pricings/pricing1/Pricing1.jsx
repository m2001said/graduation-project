import React from "react";
import Vector1 from "../../../../assets/images/Vector.svg";
import Vector2 from "../../../../assets/images/Vector2.svg";
import "./pricing1.css";

const cardData = [
  {
    title: "Design advices",
    doller: "$",
    price: "29",
    features: ["General living space advices", "Renovation advices", "Interior design advices", "Furniture reorganization", "Up to 5 hours meetings"],
    buttonClass: "pricing-card-button1",
    Vector: Vector1,
    cardClass: "pricing1-card1",
  },
  {
    title: "Complete interior",
    doller: "$",
    price: "39",
    Plans: "Most Popular Plans",
    features: ["Complete home redesign", "Interior and exterior works", "Modular interior planning", "Kitchen design", "Garages organization"],
    buttonClass: "pricing-card-button2",
    Vector: Vector2,
    cardClass: "pricing1-card2",
  },
  {
    title: "Furniture design",
    price: "59",
    doller: "$",
    features: ["Furniture for living room", "Furniture refurbishment", "Sofas and armchairs", "Tables and chairs", "Kitchens"],
    buttonClass: "pricing-card-button3",
    Vector: Vector1,
    cardClass: "pricing1-card3",
  },
];

const pricing1 = () => {
  return (
    <div className="pricing1">
      <div className="pricing1-head">
        <h1>Pricing & Plan</h1>
        <p>Home / Priceing</p>
      </div>
      <div className="pricing1-mainCards">
        {cardData.map((card, index) => (
          <div key={index} className={`pricing1-card ${card.cardClass}`}>
            <h3 className="pricing1-card-title">{card.title}</h3>
            <h1>
              <span>{card.doller}</span>
              {card.price}
            </h1>
            <span>/month</span>
            <hr></hr>
            <h6>{card.Plans}</h6>
            {card.features.map((feature, i) => (
              <p key={i}>{feature}</p>
            ))}
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

export default pricing1;
