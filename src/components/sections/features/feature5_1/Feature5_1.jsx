import React,{useEffect} from "react";
import "./feature5_1.css";
import image from "../../../../assets/images/images5/R.jpeg"

import Aos from 'aos'
import "aos/dist/aos.css"

const Feature5_1 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="feature5_1 section" >
      <div className="feature5_1-mainSection">
        <div data-aos='fade-down' data-aos-duration='2500' className="feature5_1-title">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>find help with booking and travel plans, see what to expect the journey</p>
        </div>

        <div className="feature5_1-info">
          <div className="feature5_1-info-text">
            <div data-aos='fade-down' data-aos-duration='2500' className="feature5_1-singleInfo">
              <span className="feature5_1-number1">01</span>
              <h4>Travel requirment for Dubai</h4>
              <p>find help with booking and travel plans, see what to expect the journey</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='3500' className="feature5_1-singleInfo">
              <span className="feature5_1-number2">02</span>
              <h4>Travel requirment for Dubai</h4>
              <p>find help with booking and travel plans, see what to expect the journey</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='4500' className="feature5_1-singleInfo">
              <span className="feature5_1-number3">03</span>
              <h4>Travel requirment for Dubai</h4>
              <p>find help with booking and travel plans, see what to expect the journey</p>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className="feature5_1-info-imgDiv">
            <img src={image} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature5_1;
