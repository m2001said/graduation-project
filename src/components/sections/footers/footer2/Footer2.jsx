import React from "react";
import "./footer2.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Footer2 = () => {
  const { pathname } = useLocation();
  const footer = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.footer;
    } else {
      return state.template2.footer;
    }
  });

  return (
    <footer className="footer2">
      <a href="#" className="footer2__logo">
        {footer.title}{" "}
      </a>

      <ul className="permalinks2">
        {footer.menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <a href={menuItem.link}>{menuItem.title}</a>
          </li>
        ))}
      </ul>
      
      <div className="footer2__socials">
        {footer.medias.map((icon, index) => (
          <a key={index} href={icon.url}>
            <img src={icon.icon} alt="" className="footer2-image" />{" "}
          </a>
        ))}
      </div>
      
      <div className="footer2__copyright">
        <small>&copy; {footer.subtitle}</small>
      </div>
    </footer>
  );
};

export default Footer2;
