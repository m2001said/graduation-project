import React, { useState } from "react";
import "./mainNav.css";
import logo from "../../../assets/images/mainPageAssets/logo.svg";
import posterImage from "../../../assets/images/mainPageAssets/signin.svg";
import BaseModal from "../modal/BaseModal/BaseModal.jsx";
import LoginForm from "../modal/LoginForm.jsx";
import SignUpForm from "../modal/SignUpForm.jsx";

const MainNav = () => {
  // for login/signin form
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const toggleModal = () => {
    document.querySelector(".main-nav + .modal-overlay").classList.toggle("closed");
  };
  return (
    <>
      <div className="main-nav ">
        <div className="container mx-auto px-4 flex  justify-between items-center py-4">
          <div className="main-logo flex items-center">
            <img src={logo} alt="logo" />
            <span>WEB</span>
          </div>
          <button className="signIn-btn" onClick={toggleModal}>
            Sign In
          </button>
        </div>
      </div>
      <BaseModal poster={posterImage}>{isLogin ? <LoginForm toggleForm={toggleForm} /> : <SignUpForm toggleForm={toggleForm} />}</BaseModal>
    </>
  );
};
export default MainNav;
