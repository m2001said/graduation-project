import React from "react";
import "./footer2.css";
import { useSelector } from "react-redux";

const Footer2 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.footer);
  const footer = template ? template.footer : ownFooter;
  return (
    <footer className="footer2" id={footer.sectionId}>
      <a href="#logo" className="   footer-title2">
        {footer.title}
      </a>

      <ul className="permalinks2">
        {footer.footerSections.map((item, index) => (
          <li key={index}>
            <a href={`#${item.url}`} className="footer-link2">{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="footer2__socials">
        {footer.medias.map((icon, index) => (
          <a className="a2" key={index} href={`${icon.url}`} target="_blank" rel="noopener noreferrer">
            <img src={icon.icon} alt="" className="footer2-image" />{" "}
          </a>
        ))}
      </div>

      <div className="footer2__copyright">
        <small>&copy; {footer.description}</small>
      </div>
    </footer>
  );
};

export default Footer2;
