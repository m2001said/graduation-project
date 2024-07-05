import React from "react";
import "./footer2.css";

const Footer2 = ({ template }) => {
  const footer = template.footer;

  return (
    <footer className="footer2">
      <a href="#" className="footer2__logo a2">
        {footer.title}{" "}
      </a>

      <ul className="permalinks2">
        {footer.footerSections.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="footer2__socials">
        {footer.medias.map((icon, index) => (
          <a className="a2" key={index} href={icon.url}>
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
