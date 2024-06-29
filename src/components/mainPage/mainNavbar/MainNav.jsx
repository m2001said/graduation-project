import React from "react";
import { Link } from "react-router-dom";
import "./mainNav.css";
import logo from "../../../assets/images/mainPageAssets/logo.svg";
import user from "../../../assets/images/mainPageAssets/user.svg";
import translateArabic from "../../../assets/images/mainPageAssets/translateArabic.svg";
import translateEnglish from "../../../assets/images/mainPageAssets/translateEnglish.svg";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAsync } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { persistor } from "../../../app/store";

const MainNav = ({ toggleModal }) => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation("main");

  const handleSignOut = () => {
    dispatch(logoutUserAsync());
    navigate("/");
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
      <div className="main-nav" id="main-nav">
        <div className="container mx-auto px-4 flex  justify-between items-center py-4">
          <Link to={`/${i18n.language}`}>
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
              {authState.status === "succeeded" && authState.user ? t("USER.LOG_OUT") : t("USER.SIGN_IN")}
            </button>

            {i18n.language === "ar" && (
              <button onClick={() => changeLanguage("en")} className="hover:opacity-90">
                <img className="w-8" src={translateArabic} alt="translateArabic" />
              </button>
            )}
            {i18n.language === "en" && (
              <button onClick={() => changeLanguage("ar")} className="hover:opacity-90">
                <img className="w-8" src={translateEnglish} alt="translateEnglish" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
