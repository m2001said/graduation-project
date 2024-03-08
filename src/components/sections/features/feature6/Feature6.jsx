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
            <img src={features.imgUrl} alt="" className="w-full"/>
          </div>


          <div className="w-full lg:w-1/2 md:w-1/2 px-4">
                   {" "}
            <div className="choose__content">
              <h4>{features.title}</h4>
              <h2>{features.description}</h2>
              <p>{features.info}</p>
            </div>
            <div className="features mt-4">
              <div className="feature-row flex items-center gap-5">
                <div className="single__feature">
                  <span>
                    <img src={features.cards[0].icon} alt="" className="ico" />
                  </span>
                  <h6>{features.cards[0].title}</h6>
                  <p>{features.cards[0].description}</p>
                </div>

                <div className="single__feature">
                  <span className="feature__icon-two">
                    <img src={features.cards[1].icon} alt="" className="ico" />
                  </span>
                  <h6>{features.cards[1].title}</h6>
                  <p>{features.cards[1].description}</p>
                </div>
              </div>

              <div className="feature-row mt-3 flex items-center gap-5">
                <div className="single__feature">
                  <span className="feature__icon-3">
                    <img src={features.cards[2].icon} alt="" className="ico" />
                  </span>
                  <h6>{features.cards[2].title}</h6>
                  <p>{features.cards[2].description}</p>
                </div>

                <div className="single__feature">
                  <span className="feature__icon-4">
                    <img src={features.cards[3].icon} alt="" className="ico" />
                  </span>
                  <h6>{features.cards[3].title}</h6>
                  <p>{features.cards[3].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature6;
