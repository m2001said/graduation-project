import React from "react";
import Vector1 from "../../../../../assets/images/Vector.svg"
import Vector2 from "../../../../../assets/images/Vector2.svg"
import "./pricing-cards.css";

const cardData = [
  {
    title: "Design advices",
    doller:"$",
    price: "29",
    features: ["General living space advices", "Renovation advices", "Interior design advices", "Furniture reorganization", "Up to 5 hours meetings"],
    buttonClass: "button1",
    Vector:Vector1,
    cardClass: "pricingCard1",
  },
  {
    title: "Complete interior",
    doller:"$",
    price: "39",
    Plans: "Most Popular Plans",
    features: ["Complete home redesign", "Interior and exterior works", "Modular interior planning", "Kitchen design", "Garages organization"],
    buttonClass: "button2",
    Vector:Vector2,
    cardClass: "pricingCard2",
  },
  {
    title: "Furniture design",
    price: "59",
    doller:"$",
    features: ["Furniture for living room", "Furniture refurbishment", "Sofas and armchairs", "Tables and chairs", "Kitchens"],
    buttonClass: "button3",
    Vector:Vector1,
    cardClass: "pricingCard3",
  },
];

const Cards = () => {
  return (
    <div className="pricingCard-container">
      {cardData.map((card, index) => (
        <div key={index} className={`pricingCard ${card.cardClass}`}>
          <h3>{card.title}</h3>
          <h1><span>{card.doller}</span>{card.price}</h1>
          <span>/month</span>
          <hr></hr>
          <h6>{card.Plans}</h6>
          {card.features.map((feature, i) => (
            <p key={i}>{feature}</p>
          ))}
          <button className={card.buttonClass}>
          <span> Get started </span>
          <img src={card.Vector} alt="" /> 
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
