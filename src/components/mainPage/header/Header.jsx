import React, { useState } from "react";
import "./header.css";
import logo from "../../../assets/images/mainPageAssets/logo.svg";
import hero from "../../../assets/images/mainPageAssets/hero.svg";
import posterImage from "../../../assets/images/mainPageAssets/signin.svg";
import BaseModal from "../modal/BaseModal/BaseModal.jsx";
import LoginForm from "../modal/LoginForm.jsx";
import SignUpForm from "../modal/SignUpForm.jsx";

const Header = () => {
  // for login/signin form
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const toggleModal = () => {
    document.querySelector(".modal-overlay").classList.toggle("closed");
  };
  return (
    <header className="main-header">
      <div className="container mx-auto px-4">
        <div className="head flex  justify-between items-center py-4">
          <div className="main-logo flex items-center">
            <img src={logo} alt="logo" />
            <span>WEB</span>
          </div>
          <button className="signIn-btn" onClick={toggleModal}>
            Sign In
          </button>
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
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>

      <BaseModal poster={posterImage} toggleModal={toggleModal}>
        {isLogin ? <LoginForm toggleForm={toggleForm} /> : <SignUpForm toggleForm={toggleForm} />}
      </BaseModal>
    </header>
  );
};
export default Header;
