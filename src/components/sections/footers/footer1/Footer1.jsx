import React from "react";
import "./footer1.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Footer = () => {
  const { pathname } = useLocation();
  const footer = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.footer;
    } else {
      return state.template1.footer;
    }
  });
  return (
    <div className="footer1 design-1">
      <div className="footer1-icons">
        <a href=" #">
          <img src={footer.imgUrl} alt="" />
        </a>
        <p>{footer.description}</p>
        <div className="footer1-media-icon">
          {footer.medias.map((icon) => (
            <a href={icon.url} key={icon.url}>
              <img src={icon.icon} alt="" className="footer1-img" />
            </a>
          ))}
        </div>
      </div>
      {footer.footerSections.map((item) => (
        <div className="footer1-section" key={item.title}>
          <h4>{item.title}</h4>
          <div className="footer1-element">
            {item.links.map((link) => (
              <p key={link.title}>{link.title}</p>
            ))}
          </div>
        </div>
      ))}
      <div className="footer1-contact">
        <h4>contact</h4>
        <div className="footer1-element">
          {footer.contacts.map((info, index) => {
            return <p key={index}>{info.value}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
