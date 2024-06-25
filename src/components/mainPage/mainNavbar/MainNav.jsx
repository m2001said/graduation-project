import React from "react";
import { Link } from "react-router-dom";
import "./mainNav.css";
import logo from "../../../assets/images/mainPageAssets/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAsync } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../loadingButton/LoadingButton";

const MainNav = ({ toggleModal }) => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await dispatch(logoutUserAsync()); 
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <div className="main-nav ">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <Link to={"/"}>
            <div className="main-logo flex items-center">
              <img src={logo} alt="logo" />
              <span>WEB</span>
            </div>
          </Link>
          <div className="nav-controls flex justify-between items-center gap-4">
            {authState.status === "succeeded" && authState.user && (
              <div className="user-name">
                <Link to={"/user-information"}>{authState.userName || authState.user.name}</Link>
              </div>
            )}

            <LoadingButton
              loading={authState.status === "loading"}
              onClick={authState.status === "succeeded" && authState.user ? handleSignOut : toggleModal}
              className="signIn-btn"
              btnText={authState.status === "succeeded" && authState.user ? "Sign Out" : "Sign In"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
