import React from "react";

const Card11 = (props) => {
  return (
    <div className="timeline__item11">
      <img src={props.icon} alt={props.title} className="timeline__icon11" />
      <span className="timeline__data11">{props.year}</span>
      <h3 className="timeline__title11">{props.title}</h3>
      <p className="timeline__text11">{props.desc}</p>
    </div>
  );
};

export default Card11;
