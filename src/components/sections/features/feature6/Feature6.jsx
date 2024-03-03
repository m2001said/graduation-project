import React from "react";
import "./feature6.css";
import { useSelector } from "react-redux";

const Feature6 = () => {
  const { feature } = useSelector((state) => state.template6);

  return (
    <section className="design-6" id="About">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 md:w-1/2 px-4">
            <img src={feature.imgUrl} alt="" className="w-full" />
          </div>

          <div className="w-full lg:w-1/2 md:w-1/2 px-4">
            <div className="choose__content">
              <h4>{feature.title}</h4>
              <h2>{feature.description}</h2>
              <p>{feature.info}</p>
            </div>
            <div className="features mt-4">
              <div className="grid grid-cols-2 gap-5">
                {feature.cards.map((card, index) => (
                  <div key={index} className="single__feature">
                    <span>
                      <img src={card.icon} alt="" className="ico" />
                    </span>
                    <h6>{card.title}</h6>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature6;
