import React from "react";
import { useSelector } from "react-redux";
import "./footer15.css";

const Footer15 = () => {
  const { footer } = useSelector((state) => state.template15);

  return (
    <footer className="footer15 ">
      <div className="container mx-auto py-[60px] footer15-container">
        <div className="footer15-text">
          <span className="footer15-icons">
            {footer.icons.map((icon, index) => (
              <a href="#" key={index} target="_blank" rel="noopener noreferrer">
                <img src={icon.imgUrl} alt={`Icon ${index}`} className="footer15-img" />
              </a>
            ))}
          </span>
          <div className="footer15-titles">
            <div className="footer15-title foot15_1">{footer.titles.title}</div>
            <div className="footer15-subtitle foot15_2">{footer.titles.subtitle}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer15;
