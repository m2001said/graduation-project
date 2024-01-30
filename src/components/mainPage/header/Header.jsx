import React from "react";
import "./header.css";
import hero from "../../../assets/images/mainPageAssets/hero.png";
import AiForm from "../modal/AiForm.jsx";
import BaseModal from "../modal/BaseModal/BaseModal.jsx";

  const toggleModal = () => {
    document.querySelector(".main-header + .modal-overlay").classList.toggle("closed");
  };
const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="container mx-auto px-4">
          <div className="info-section flex gap-5 justify-between items-center py-8">
            <div className="hero-info">
              <div className="info-title">
                <h1> welcome to ZWEB where your websites dreams take flight with ai</h1>
              </div>
              <div className="info-description my-6">
                <p>
                  At Zzgazig Website Easy Builer, we're revolutionizing design proces With our intelligent AI website builder, your vision f or a digital
                  presence is transformed into reality with just a few clicks. From nebulous ideas to fully-fledged websites, the future of web design begins
                  here
                </p>
              </div>
              <div className="info-btn" onClick={toggleModal}>Generate your website</div>
            </div>
            <div className="main-hero-image">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </header>
      <BaseModal poster={hero}>
        <AiForm></AiForm>
      </BaseModal>
    </>
  );
};
export default Header;
