import React from "react";
import { useSelector } from "react-redux";
import "./footer15.css";
import { useLocation } from "react-router";

const Footer15 = () => {
  // const { footer } = useSelector((state) => state.template15);
  const { pathname } = useLocation();
  const footer = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.footer;
    } else {
      return state.template15.footer;
    }
  });
  return (
    <footer className="footer15 ">
      <div className="container mx-auto py-[60px] footer15-container">
        <div className="footer15-text">
          <span className="footer15-icons">
            {footer.links.map((icon, index) => (
              <a href={icon.url} key={index} target="_blank" rel="noopener noreferrer">
                <img src={icon.icon} alt={`Icon ${index}`} className="footer15-img" />
              </a>
            ))}
          </span>
          <div className="footer15-titles">
            <div className="footer15-title foot15_1">{footer.rights}</div>
            <div className="footer15-subtitle foot15_2">{footer.author}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer15;
