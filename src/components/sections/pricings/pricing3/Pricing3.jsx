import React from "react";
import "./pricing3.css";
import { useSelector } from "react-redux";

const Pricing3 = () => {
  const { pricing } = useSelector((state) => state.template3);
  return (
    <div className="plans-container3" id="Plans">
      <div className="blur3 plans-blur-1"></div>
      <div className="blur3 plans-blur-2"></div>
      <div className="plans-header3">
        <span className="stroke-text">{pricing.title.titleA}</span>
        <span>{pricing.title.titleB}</span>
        <span className="stroke-text">{pricing.title.titleC}</span>
      </div>

      {/* plans-card */}
      <div className="plans3">
        {pricing.plansData.map((plan, i) => (
          <div className="plan3" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features3">
              {plan.features.map((feature, j) => (
                <div className="feature3" key={j}>
                  <img src={pricing.imgUrl} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>{pricing.description}</span>
            </div>
            <button className="btn3">{pricing.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing3;
