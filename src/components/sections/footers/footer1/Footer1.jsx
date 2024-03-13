import React from "react";
import "./footer1.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Footer = () => {
  // const { footer } = useSelector((state) => state.template1);
  const { pathname } = useLocation();
  const footer = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.footer;
    } else {
      return state.template1.footer;
    }
  });
  const contactInfo = Object.keys(footer.contact);
  return (
    <div className="footer1 design-1">
      <div className="footer1-icons">
        <a href=" #">
          <img src={footer.imgUrl} alt="" />
        </a>
        <p>{footer.description}</p>
        <div className="footer1-media-icon">
          {footer.mediaIcons.map((icon) => (
            <a href={icon.url} key={icon.url}>
              <img src={icon.icon} alt="" className="footer1-img" />
            </a>
          ))}
        </div>
      </div>
      {footer.items.map((item) => (
        <div className="footer1-section" key={item.title}>
          <h4>{item.title}</h4>
          <div className="footer1-element">
            {item.links.map((link) => (
              <p key={link}>{link}</p>
            ))}
          </div>
        </div>
      ))}
      <div className="footer1-contact">
        <h4>{footer.contact.title}</h4>
        <div className="footer1-element">
          {contactInfo.map((info, index) => {
            if (index === 0) return null;
            return <p key={info}>{footer.contact[info]}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
