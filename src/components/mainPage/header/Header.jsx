import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import hero from "../../../assets/images/mainPageAssets/hero.png";

const toggleModal = () => {
  document.querySelector(".modal-overlay").classList.toggle("closed");
};
const Header = ({ loginState }) => {
  return (
    <>
      <header className="main-header">
        <div className="container mx-auto px-4">
          <div className="info-section flex gap-5 justify-between items-center py-8">
            <div className="hero-info">
              <h1 className="info-title"> welcome to ZWEB where your websites dreams take flight with ai</h1>
                <p className="info-description">
                  At Zagazig Easy Website Builder, we’re pioneering a new era in the design process. Our intelligent AI website builder turns your digital
                  vision into reality in just a few clicks. From abstract concepts to fully developed websites, the future of web design starts here.
                </p>
              <button className="info-btn" onClick={toggleModal}>
                {loginState ? <Link to={"Designs-page"}>Generate your website</Link> : " Generate your website"}
              </button>
            </div>
            <div className="main-hero-image">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
