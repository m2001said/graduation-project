import React from "react";
import "./feature.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
const Featrue1 = () => {
  // const { features } = useSelector((state) => state.template1);
  // const feature = features;
  const { pathname } = useLocation();
  const feature = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.features;
    } else {
      return state.template1.features;
    }
  });
  return (
    <div className="feature1-layout">
      <div className="feature-content">
        <div className="sub-content">
          <h1>{feature.title}</h1>

          <p>{feature.description}</p>
        </div>

        <div className="contact-container">
          <div className="details">
            <img src={feature.icons[0]} alt="" />
            <div className="phone">
              <h1>{feature.phone}</h1>
              <h2>Call Us Anytime </h2>
            </div>
          </div>
          <button>
            <p>{feature.buttonText}</p>
            <img src={feature.icons[1]} alt="" />
          </button>
        </div>
      </div>

      <div className="image-container">
        <div className="img-background">
          <img src={feature.imgUrl} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Featrue1;
