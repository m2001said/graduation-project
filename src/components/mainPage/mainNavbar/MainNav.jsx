import React from "react";
import "./mainNav.css";
import logo from "../../../assets/images/mainPageAssets/logo.svg";

const MainNav = ({ loginState, setSignOUT }) => {
  const toggleModal = () => {
    document.querySelector(".modal-overlay").classList.toggle("closed");
  };

  return (
    <>
      <div className="main-nav ">
        <div className="container mx-auto px-4 flex  justify-between items-center py-4">
          <div className="main-logo flex items-center">
            <img src={logo} alt="logo" />
            <span>WEB</span>
          </div>
          <button className="signIn-btn" onClick={loginState ? setSignOUT : toggleModal}>
            {loginState ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MainNav;
