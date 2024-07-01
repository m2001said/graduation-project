import React from "react";
import "./footer4.css";

const Footer4 = ({ template }) => {
  const footer = template.footer;
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src={footer.imgUrl} alt="" width={120} />
          <span className="secondaryText">{footer.description}</span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Contact</span>
          <span className="secondaryText">{footer.contacts[0].value}</span>
          <div className="flexCenter f-menu">
            {/* Map over footer links and render each dynamically */}
            {footer.footerSections[0].links.map((link, index) => (
              <span key={index}>{link.title}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer4;
