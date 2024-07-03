import React from "react";
import "../pricing11/pricing11.css";

const Pricings11 = ({ template }) => {
  const pricing = template.pricing;

  return (
    <section className="pricing1 container section11" id="layers">
      <h2 className="section__title11">{pricing.title}</h2>
      <div className="pricing__container11 grid11">
        {pricing.plans.map((card, index) => (
          <div className="pricing__item11" key={index}>
            <img src={card.imgUrl} alt="" className="pricing__img11" />
            <h3 className="pricing__plan11">{card.title}</h3>
            <p className="princing__title11">{card.subtitle}</p>
            <p className="pricing__support11">{card.description}</p>
            <h3 className="price11">
              <em>{card.currencySymbol}</em> {card.price} <span>{card.timeUnit}</span>
            </h3>
            <a href="" className="btn11">
              {pricing.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Pricings11;
