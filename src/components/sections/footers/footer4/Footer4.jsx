import React from "react";
import { useSelector } from "react-redux";
import "./footer4.css";

const Footer4 = () => {
  const { footer } = useSelector((state) => state.template4);

  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src={footer.logo} alt="" width={120} />
          <span className="secondaryText">{footer.description}</span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">{footer.title}</span>
          <span className="secondaryText">{footer.address}</span>

          <div className="flexCenter f-menu">
            {footer.serviecs.map((serviec, index) => (
              <span key={index}>{serviec}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer4;
