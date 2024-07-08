import React from "react";
import "./footer5.css";
import { useSelector } from "react-redux";




const Footer5 = ({template}) => {
  const ownFooter = useSelector((state) => state.ownTemplate.footer);
  const footer = template ? template.footer : ownFooter;
  
  return (
    <div className="footer5">
      <div className="footer5-mainSection design5-container design5-grid">
        <div className="footer5-gridOne">
          <div className="gridOne-logeDiv">
            <img src={footer.imgUrl} className="footer5-logo" alt="" />
          </div>
          <p>{footer.description}</p>
          <div className="socialIcon5 design5-flex">
            {footer.medias.map((icon) => (
              <a href={icon.url} key={icon.url}>
                <img src={icon.icon} alt="" className="footer5-singleIcon" />
              </a>
            ))}
          </div>
        </div>

        {footer.footerSections.map((section) => (
          <div className="footer5-links" key={section.title}>
            <span className="link-title">{section.title}</span>
            {section.links.map((link) => (
              <a href={link.url} key={link.title}>
                <li className="footer5-links-element">{link.title}</li>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer5;
