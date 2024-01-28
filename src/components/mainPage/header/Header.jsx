import React from "react";
import "./header.css";
import logo from "../../../assets/images/mainPageAssets/logo.svg";
import hero from "../../../assets/images/mainPageAssets/hero.svg";
import Modal from "../modal/Modal";


const Header = () => {
  return (
    <header className="main-header">
      <div className="container mx-auto px-4">
        <div className="head flex  justify-between items-center py-4">
          <div className="main-logo flex items-center">
            <img src={logo} alt="" />
            <span>WEB</span>
          </div>
          <div className="signIn-btn">Sign In</div>
        </div>
        <div className="info-section flex gap-5 justify-between items-center py-8">
          <div className="hero-info">
            <div className="info-title">welcome to ZWEB where your websites dreams take flight with ai </div>
            <div className="info-description my-6">
              At Zzgazig Website Easy Builer, we're revolutionizing design proces With our intelligent AI website builder, your vision f or a digital presence
              is transformed into reality with just a few clicks. From nebulous ideas to fully-fledged websites, the future of web design begins here
            </div>
            <div className="info-btn">Generate your website</div>
          </div>
          <div className="main-hero-image">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
      {/* <Modal type={"sign-in"} posterImage={logo}></Modal> */}
    </header>
  );
};
export default Header;
