import React from "react";
import { useSelector } from "react-redux";
import "./footer4.css";

const Footer4 = () => {
  const { Footer4 } = useSelector((state) => state.template4);

  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src={Footer4.logo} alt="" width={120} />
          <span className="secondaryText">{Footer4.description}</span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">{Footer4.title}</span>
          <span className="secondaryText">{Footer4.address}</span>

          <div className="flexCenter f-menu">
            {Footer4.serviecs.map((serviec, index) => (
              <span key={index}>{serviec}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer4;
