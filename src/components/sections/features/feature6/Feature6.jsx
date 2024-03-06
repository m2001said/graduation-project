import React from "react";
import "./feature6.css";
import { useSelector } from "react-redux";

const Feature6 = () => {
  const { features } = useSelector((state) => state.template6);

  return (
    <section className="design-6" id="About">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 md:w-1/2 px-4">
            <img src={features.imgUrl} alt="" className="w-full" />
          </div>

          <div className="w-full lg:w-1/2 md:w-1/2 px-4">
            <div className="choose__content">
              <h4>{features.title}</h4>
              <h2>{features.description}</h2>
              <p>{features.info}</p>
            </div>
            <div className="features mt-4">
              <div className="grid grid-cols-2 gap-5">
                {features.cards.map((card, index) => (
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
