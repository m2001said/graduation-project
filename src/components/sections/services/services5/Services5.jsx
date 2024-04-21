import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import "./services5.css";
import { useLocation } from "react-router";


// import Aos from 'aos'
// import "aos/dist/aos.css"

const Services5 = () => {

  // useEffect(()=>{
  //   Aos.init({duration: 2000})
  // },[])

  const { pathname } = useLocation();
  const service = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.services;
    } else {
      return state.template5.services;
    }
  });
  return (
    <div className="services5">
      <div className="services5-mainSection">
        <div className="services5-title">
          <h2>{service.title}</h2>
          <button className="services5-btn">{service.buttonTxt}</button>
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
