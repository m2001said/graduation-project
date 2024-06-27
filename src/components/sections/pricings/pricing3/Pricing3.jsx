import React from "react";
import "./pricing3.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Pricing3 = () => {
  const { pathname } = useLocation();
  const pricing = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.pricing;
    } else {
      return state.template1.pricing;
    }
  });
  return (
    <div className="plans-container3" id="Plans">
      <div className="blur3 plans-blur-1"></div>
      <div className="blur3 plans-blur-2"></div>
      <div className="plans-header3">
        {pricing.title.map((item, index) => (
          <span key={index} className={index % 2 === 0 ? "stroke-text" : ""}>
            {item.Subtitle}
          </span>
        ))}
      </div>

      <div className="plans3">
        {pricing.plans.map((plan, i) => (
          <div className="plan3" key={i}>
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
            <button className="btn3">{pricing.actionButton}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing3;
