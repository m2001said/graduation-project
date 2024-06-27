import React from "react";
import { Link } from "react-router-dom";
import "./mainNav.css";
import logo from "../../../assets/images/mainPageAssets/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAsync } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { persistor } from "../../../app/store";
import { resetState } from "../../../features/templateData/templateSlice";

const MainNav = ({ toggleModal }) => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation("main");

  const handleSignOut = () => {
    dispatch(logoutUserAsync());
    // todo reset all state not one only
    dispatch(resetState());
    persistor.purge().then(() => {
      navigate("/");
    });
  };

  const changeLanguage = (lng) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|ar)/, `/${lng}`);
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    navigate(newPath);
  };

  return (
    <>
      <div className="main-nav ">
        <div className="container mx-auto px-4 flex  justify-between items-center py-4">
          <Link to={`/${i18n.language}`}>
            <div className="main-logo flex items-center">
              <img src={logo} alt="logo" />
              <span>WEB</span>
            </div>
          </Link>
          <div className="nav-controls flex  justify-between items-center gap-4">
            {authState.status === "succeeded" && authState.user && <div className="user-name">{authState.user.name}</div>}
            <button className="signIn-btn" onClick={authState.status === "succeeded" && authState.user ? handleSignOut : toggleModal}>
              {authState.status === "succeeded" && authState.user ? t("USER.LOG_OUT") : t("USER.SIGN_IN")}
            </button>
            <div>
              {i18n.language === "ar" && <button onClick={() => changeLanguage("en")}>En</button>}
              {i18n.language === "en" && <button onClick={() => changeLanguage("ar")}>Ar</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
