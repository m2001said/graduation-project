import React from "react";
import "./cta3.css";

const Cta3 = ({ template }) => {
  const { title, subtitle, description, text, buttonText, sectionId } = template.cta;

  return (
    <div className="Join3" id={sectionId}>
      <div className="left-c3">
        <hr />
        <div className="title3-group">
          <span className="stroke-text">{title}</span>
          <span>{subtitle}</span>
        </div>
        <div className="title3-group">
          <span className="stroke-text">{description}</span>
          <span>{text}</span>
        </div>
      </div>
      <div className="right-c3">
        <form className="email3-container">
          <input className="email3-container-input" type="email" name="user_email" placeholder="Enter Your Email address" />
          <button className="btn3 btn3-c3">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default Cta3;
