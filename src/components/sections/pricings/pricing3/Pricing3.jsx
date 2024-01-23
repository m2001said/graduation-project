import React from "react";
import "./pricing3.css";
import { useSelector } from "react-redux";

const Pricing3 = () => {
  const { pricing3 } = useSelector((state) => state.template3);
  return (
    <div className="plans-container3">
      <div className="blur3 plans-blur-1"></div>
      <div className="blur3 plans-blur-2"></div>
      <div className="plans-header3">
        <span className="stroke-text">{pricing3.title[0].titleA}</span>
        <span>{pricing3.title[0].titleB}</span>
        <span className="stroke-text">{pricing3.title[0].titleC}</span>
      </div>

      {/* plans-card */}
      <div className="plans3">
        {pricing3.plansData.map((plan, i) => (
          <div className="plan3" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features3">
              {plan.features.map((feature, j) => (
                <div className="feature3" key={j}>
                  <img src={pricing3.imgUrl} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>{pricing3.description}</span>
            </div>
            <button className="btn">{pricing3.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing3;
