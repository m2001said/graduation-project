import React from "react";
import "./footer1.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const { footer } = useSelector((state) => state.template);
   console.log(footer);

  return (
    
      <div className="footer1 design-1">
        <div className="footer1-icons">
          <a href=" #">
            <img src={footer.logo} alt="" />
          </a>
          <p>{footer.description}</p>
          <div className="footer1-media-icon">
            {footer.mediaIcons.map((icon, index) => (
              <a href={"# "} key={index}>
                <img src={icon} alt="" className="footer1-img" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer1-section">
          <h4>{footer.sectionTitle}</h4>
          <div className="footer1-element">
            {footer.blocks[1].sections.map((el)=>(<p>{el}</p>))}
          </div>
        </div>
        <div className="footer1-services">
          <h4>{footer.serviceTitle}</h4>
          <div className="footer1-element">
            {footer.blocks[0].services.map((el)=>(<p>{el}</p>))}
          </div>
        </div>
        <div className="footer1-contact">
          <h4>{footer.contactTitle}</h4>
          <div className="footer1-element">
            <p>{footer.location}</p>
            <p>{footer.email}</p>
            <p>{footer.phone}</p>
          </div>
        </div>
      </div>
   
  );
};

export default Footer;
