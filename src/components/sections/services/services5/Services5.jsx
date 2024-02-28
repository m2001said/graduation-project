import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import "./services5.css";


import Aos from 'aos'
import "aos/dist/aos.css"

const Services5 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  const { services } = useSelector((state) => state.template5);

  return (
    <div className="services5">
      <div className="servicess5-mainSection">
        <div className="services5-title">
          <h2 data-aos="fade-right" data-aos-duration="2500">
            {services.title}
          </h2>
          <button data-aos="fade-left" data-aos-duration="2500" className="services5-btn">
            {services.buttonTxt}
          </button>
        </div>

        <div className="services5-cards">
          {services.blocks.map((card, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="2500" className="services5-singleCard">
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
