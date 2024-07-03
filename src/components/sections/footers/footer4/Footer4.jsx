import React from "react";
import "./footer4.css";

const Footer4 = ({ template }) => {
  const footer = template.footer;
  return (
    <div className="f-wrapper4">
      <div className="paddings4 innerWidth4 flexCenter4 f-container4">
        <div className="flexColStart4 f-left4">
          <img src={footer.imgUrl} alt="" width={120} />
          <span className="secondaryText4">{footer.description}</span>
        </div>

        <div className="flexColStart4 f-right4">
          <span className="primaryText4">Contact</span>
          <span className="secondaryText4">{footer.contacts[0].value}</span>
          <div className="flexCenter4 f-menu4">
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
