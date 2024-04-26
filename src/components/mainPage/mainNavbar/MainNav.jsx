import React from "react";
import { Link } from "react-router-dom";
import "./mainNav.css";
import logo from "../../../assets/images/mainPageAssets/logo.svg";
import { useSelector } from 'react-redux';

const MainNav = ({toggleModal}) => {
  const authState = useSelector(state => state.auth); 
  console.log(authState.status);
  return (
    <>
      <div className="main-nav ">
        <div className="container mx-auto px-4 flex  justify-between items-center py-4">
          <Link to={"/"}>
            <div className="main-logo flex items-center">
              <img src={logo} alt="logo" />
              <span>WEB</span>
            </div>
          </Link>
          <div className="nav-controls flex  justify-between items-center gap-4">
            <div className="user-name">{authState.user.name}</div>
          <button className="signIn-btn" onClick={toggleModal}>
            {authState.status === "succeeded" ? "Sign Out" : "Sign In"}
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
