import React,{useEffect} from "react";
import "./feature5_2.css";
import imageGrid from "../../../../assets/images/images5/OIP.jpeg";

import Aos from 'aos'
import "aos/dist/aos.css"

const Feature5_2 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="feature5_2 design5-container design5-section">

      <div className="featue5_2-main">
        <div data-aos='fade-down' data-aos-duration='2500' className="feature5_2-imgDiv">
          <img src={imageGrid} alt="" className="feature5_2-image" />
        </div>

        <div className="feature5_2-text">
          <h2 data-aos='fade-down' data-aos-duration='2500'>Unaccompanied minor lounge</h2>

          <div className="feature5_2-cards design5-grid">
            <div data-aos='fade-down' data-aos-duration='2500' className="feature5_2-singleCard">
              <span className="singleCard-title">Help through the airport</span>
              <p>You can also call airlines from your phone and book aflight ticket to one of your faverite destinations</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="feature5_2-singleCard">
              <span className="singleCard-title">Priority Boarding</span>
              <p>You can also call airlines from your phone and book aflight ticket to one of your faverite destinations</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="feature5_2-singleCard">
              <span className="singleCard-title">care on the flight</span>
              <p>You can also call airlines from your phone and book aflight ticket to one of your faverite destinations</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="feature5_2-singleCard">
              <span className="singleCard-title">chauffeur-drive service</span>
              <p>You can also call airlines from your phone and book aflight ticket to one of your faverite destinations</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Feature5_2;
