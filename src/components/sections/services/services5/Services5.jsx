import React,{useEffect} from "react";
import "./services5.css";
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs";

import Aos from 'aos'
import "aos/dist/aos.css"

const Services5 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="services5">
      <div className="servicess5-mainSection">
        <div className="services5-title">
          <h2 data-aos='fade-right' data-aos-duration='2500'>Travel to make memories all around the world</h2>
          <button data-aos='fade-left' data-aos-duration='2500' className="services5-btn"> View all </button>
        </div>

        <div className="services5-cards">

          <div data-aos='fade-up' data-aos-duration='2500' className="services5-singleCard">
            <div className="cardIconDiv1">
              <RxCalendar className="cardIcon" />
            </div>
            <span className="cardtitle">Book & Relax</span>
            <p>You can also call airlines from your phone and book aflight ticket</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className="services5-singleCard">
            <div className="cardIconDiv2">
              <BsShieldCheck className="cardIcon" />
            </div>
            <span className="cardtitle">Smart & checklist</span>
            <p>You can also call airlines from your phone and book aflight ticket</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className="services5-singleCard">
            <div className="cardIconDiv3">
              <BsBookmarkCheckFill className="cardIcon" />
            </div>
            <span className="cardtitle">Save more</span>
            <p>You can also call airlines from your phone and book aflight ticket</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services5;
