import React from "react";
import { useSelector } from "react-redux";
import "./footer4.css";
import { useLocation } from "react-router";

const Footer4 = () => {
  const { pathname } = useLocation();
  const footer = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.footer;
    } else {
      return state.template4.footer;
    }
  });
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
