import React from "react";
import { Link } from "react-router-dom";
import "./mainNav.css";
import logo from "../../../assets/images/mainPageAssets/logo.svg";
import user from "../../../assets/images/mainPageAssets/user.svg";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAsync } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const MainNav = ({ toggleModal }) => {
  const Navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUserAsync());
    Navigate("/");
  };

  return (
    <>
      <div className="main-nav" id="main-nav">
        <div className="container mx-auto px-4 flex  justify-between items-center py-4">
          <Link to={"/"}>
            <div className="main-logo flex items-center">
              <img src={logo} alt="logo" />
              <span>WEB</span>
            </div>
          </Link>

          <div className="nav-controls flex justify-between items-center gap-2 md:gap-6">
            {authState.status === "succeeded" && authState.user && (
              <Link to={"/"} className="flex items-center gap-2 ">
                <p className="text-base md:text-lg hidden md:block">{authState.user.name}</p>

                <img className="w-6" src={user} alt="logo" />
              </Link>
            )}
            <button className="signIn-btn p-1 md:p-2" onClick={authState.status === "succeeded" && authState.user ? handleSignOut : toggleModal}>
              {authState.status === "succeeded" && authState.user ? "Sign Out" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
