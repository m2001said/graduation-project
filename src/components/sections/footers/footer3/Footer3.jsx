import React from "react";
import "./footer3.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Footer3 = () => {
  const { pathname } = useLocation();
  const footer = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.footer;
    } else {
      return state.template3.footer;
    }
  });
  return (
    <div className="footer3-container">
      <hr />
      <div className="footer3">
        <div className="scoil-links-f3">
          {footer.mediaIcons.map((icon, index) => (
            <img key={index} src={icon.icon} alt="" />
          ))}
        </div>

        <div className="logo-f3">
          <img src={footer.imgUrl} alt="" />
        </div>
      </div>
      <div className="blur3 blur-f-1"></div>
      <div className="blur3 blur-f-2"></div>
    </div>
  );
};

export default Footer3;
