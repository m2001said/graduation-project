import React from "react";
import PhotoImage from "./Photo1.jpg";
import PhotoImage2 from "./Vector .svg";
import "./feature.css";
import { useSelector } from "react-redux";
const Featrue1 = () => {
  const { feature } = useSelector((state) => state.template);

  return (
    <div className="feature1-layout">
      <div className="feature-content">
        <div className="sub-content">
          <h1>{feature.title}</h1>

          <p>{feature.description}</p>
        </div>

        <div className="contact-container">
          <div className="details">
            <img src={feature.icon} alt="" />
            <div className="phone">
              <h1>{feature.phone}</h1>
              <h2>Call Us Anytime </h2>
            </div>
          </div>
          <button>
            <p>{feature.buttonText}</p>
            <img src={feature.buttonIcon} alt="" />
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
