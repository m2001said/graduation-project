import React from "react";
import "./services1Card.css";

const Services1Card = ({ imgUrl, title, description }) => {
  return (
    <div className="srv-box">
      <img alt="" src={imgUrl} />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Services1Card;
