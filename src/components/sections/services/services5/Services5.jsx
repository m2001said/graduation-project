import React,{useEffect} from "react";
import "./services5.css";




const Services5 = ({template}) => {
  const service = template.services;


  return (
    <div className="services5">
      <div className="services5-mainSection">
        <div className="services5-title">
          <h2>{service.title}</h2>
          {/* <button className="services5-btn">{service.buttonText}</button> */}
        </div>

        <div className="services5-cards">
          {service.services.map((card, index) => (
            <div key={index} className="services5-singleCard">
              <div className={`cardIconDiv${index}`}>
                <a href=" #">
                  <img src={card.icon} alt="" className="cardIcon" />
                </a>
              </div>
              <span className="cardtitle">{card.title}</span>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services5;
