import React from "react";
import "./footer12.css";

const Footer12 = ({ template }) => {
  const footer = template.footer;
  return (
    <div className="footer12">
      <p>{footer.title}</p>
      <ul>
        <li>{footer.description}</li>
        <li>{footer.subtitle}</li>
      </ul>
    </div>
  );
};

export default Footer12;
