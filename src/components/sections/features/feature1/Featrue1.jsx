import React from "react";
import PhotoImage from "./Photo1.jpg";
import PhotoImage2 from "./Vector .svg";
import "./feature.css";
const Featrue1 = () => {
  return (
    <div className="feature1-layout">
      <div className="feature-content">
        <div className="sub-content">
          <h1>We Create The Art Of Stylish Living Stylishly</h1>

          <p>
            It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using
            that it has a more-or-less normal.
          </p>
        </div>

        <div className="contact-container">
          <div className="details">
            <img src="/images/call-icon.svg" alt="" />
            <div className="phone">
              <h1>01010351108</h1>
              <h2>Call Us Anytime </h2>
            </div>
          </div>
          <button>
            <p>Get Free Estimate</p>
            <img src={PhotoImage2} alt="" />
          </button>
        </div>
      </div>

      <div className="image-container">
        <div className="img-background">
          <img src={PhotoImage} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Featrue1;
