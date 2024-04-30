import React from "react";
import { Link } from "react-router-dom";
import "./mainNav.css";
import logo from "../../../assets/images/mainPageAssets/logo.svg";
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserAsync } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const MainNav = ({ toggleModal }) => {
  const Navigate = useNavigate();
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUserAsync());
    Navigate('/');
  };

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
            {authState.status === "succeeded" && authState.user && (
              <div className="user-name">{authState.user.name}</div>
            )}
            <button className="signIn-btn" onClick={authState.status === "succeeded" && authState.user ? handleSignOut : toggleModal}>
              {authState.status === "succeeded" && authState.user ? "Sign Out" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
