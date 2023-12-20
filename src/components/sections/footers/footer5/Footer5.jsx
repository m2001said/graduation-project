import React,{useEffect} from 'react';
import "./footer5.css";
import Logo from "../../../../assets/images/images5/logo.jpg";

import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

import Aos from 'aos'
import "aos/dist/aos.css"

const Footer5 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='footer5'>

      <div className="footer5-mainSection design5-container design5-grid">

        <div data-aos='fade-up' data-aos-duration='2500' className="footer5-gridOne">
          <div  className="gridOne-logeDiv">
            <img src={Logo} className='footer5-logo' alt=''  />
          </div>
          <p>Your mind shoud be stronger than your feeling, fly! </p>
          <div className="socialIcon design5-flex">
          <TiSocialFacebook className='footer5-singleIcon'/>
          <AiOutlineTwitter className='footer5-singleIcon'/>
          <AiFillYoutube className='footer5-singleIcon'/>
          <FaPinterestP className='footer5-singleIcon'/>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footer5-links">
          <span className="link-title">Information</span>
          <li>
            <a href=" ">Home</a>
          </li>
          <li>
            <a href=" ">Explore</a>
          </li>
          <li>
            <a href=" ">Flight State</a>
          </li>
          <li>
            <a href=" ">Travel</a>
          </li>
          <li>
            <a href=" ">Check-In</a>
          </li>
          <li>
            <a href=" ">Manage your booking</a>
          </li>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footer5-links">
          <span className="link-title">Quick Guide</span>
          <li>
            <a href=" ">FAQ</a>
          </li>
          <li>
            <a href=" ">How To</a>
          </li>
          <li>
            <a href=" ">Features</a>
          </li>
          <li>
            <a href=" ">Baggage</a>
          </li>
          <li>
            <a href=" ">Route Map</a>
          </li>
          <li>
            <a href=" ">Our Communities</a>
          </li>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footer5-links">
          <span className="link-title">Information</span>
          <li>
            <a href=" ">chauffer</a>
          </li>
          <li>
            <a href=" ">our partners</a>
          </li>
          <li>
            <a href=" ">Destination</a>
          </li>
          <li>
            <a href=" ">Careers</a>
          </li>
          <li>
            <a href=" ">Transportation</a>
          </li>
          <li>
            <a href=" ">Programme Rules</a>
          </li>
        </div>

      </div>
    </div>
  )
}

export default Footer5