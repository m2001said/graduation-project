import React from "react";
import "./services1Card.css";

const Services1Card = ({ image, title, description }) => {
  return (
    <div className="srv-box">
      <img src={image} alt={`image of ${title}`} />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Services1Card;
