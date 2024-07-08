import React from "react";
import "./footer15.css";
import { useSelector } from "react-redux";

const Footer15 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.footer);
  const footer = template ? template.footer : ownFooter;

  return (
    <footer className="footer15" id={footer.sectionId}>
      <span className="footer15-icons">
        {footer.medias.map((icon, index) => (
          <a href={icon.url} key={index} target="_blank" rel="noopener noreferrer">
            <img src={icon.icon} alt={`Icon ${index}`} className="footer15-img" />
          </a>
        ))}
      </span>
      <div className="footer15-titles">
        <div className="footer15-title foot15_1">{footer.title}</div>
        <div className="footer15-subtitle foot15_2">{footer.subtitle}</div>
      </div>
    </footer>
  );
};

export default Footer15;
