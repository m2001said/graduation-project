import React from "react";
import "./footer2.css";
import { useSelector } from "react-redux";

const Footer2 = () => {
  const { footer } = useSelector((state) => state.template2);

  return (
    <footer className="design-2">
      <a href="#" className="footer2__logo">
        {footer.logo}{" "}
      </a>

      <ul className="permalinks">
        <li>
          <a href="#hero2">Home</a>
        </li>

        <li>
          <a href="#services2">Services</a>
        </li>

        <li>
          <a href="#testimonials2">Testimonials</a>
        </li>
        <li>
          <a href="#contactUs2">Contact</a>
        </li>
      </ul>
      <div className="footer2__socials">
        {footer.mediaIcons.map((icon) => (
          <a href={icon.url}>
            <img src={icon.icon} alt="" className="footer2-image" />{" "}
          </a>
        ))}
      </div>
      <div className="footer2__copyright">
        <small>&copy; {footer.rights}</small>
      </div>
    </footer>
  );
};

export default Footer2;
