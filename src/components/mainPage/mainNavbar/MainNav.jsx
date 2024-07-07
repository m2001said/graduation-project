import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./mainNav.css";
import logo from "../../../assets/images/mainPageAssets/logo.svg";
import user from "../../../assets/images/mainPageAssets/user.svg";
import translateArabic from "../../../assets/images/mainPageAssets/translateArabic.svg";
import translateEnglish from "../../../assets/images/mainPageAssets/translateEnglish.svg";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAsync } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../loadingButton/LoadingButton";
import { useTranslation } from "react-i18next";
import { persistor } from "../../../app/store";
import { resetState } from "../../../features/templateData/templateSlice";

const MainNav = ({ toggleModal }) => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const userAvatar = useSelector((state) => state.auth.userAvatar);
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation("main");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    dispatch(logoutUserAsync());
    dispatch(resetState());
    persistor.purge().then(() => {
      navigate("/");
    });
    toggleMenu();
  };

  const currentPath = window.location.pathname;
  const changeLanguage = (lng) => {
    const newPath = currentPath.replace(/^\/(en|ar)/, `/${lng}`);
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    navigate(newPath);
  };

  const showchangelanguage = () => {
    const adminRoutes = ["admin", "user-information", "designs", "reset-password", "failed-verified", "success-verified", "websites", "services"];
    const pathWithoutLang = currentPath.replace(/^\/(en|ar)/, "");
    return pathWithoutLang === "" || adminRoutes.some((route) => pathWithoutLang === `/${route}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(authState.status);

  return (
    <>
      <div className="main-nav" id="main-nav">
        <div className="container mx-auto px-4 flex  justify-between items-center py-4">
          <Link dir="ltr" to={`/${i18n.language}`}>
            <div className="main-logo flex items-center">
              <img src={logo} alt="logo" />
              <span>WEB</span>
            </div>
          </Link>

          {authState.status === "succeeded" && (
            <div className="hidden md:flex justify-between items-center gap-4">
              <NavLink to={`/${i18n.language}/services`} className={({ isActive }) => (isActive ? "text-pink-300" : "hover:text-pink-300")}>
                {t("HERO.SERVICES")}
              </NavLink>
              <NavLink to={`/${i18n.language}/websites`} className={({ isActive }) => (isActive ? "text-pink-300" : "hover:text-pink-300")}>
                {t("HERO.WEBSITES")}
              </NavLink>
              <NavLink to={`/${i18n.language}/pages`} className={({ isActive }) => (isActive ? "text-pink-300" : "hover:text-pink-300")}>
                {t("HERO.PAGES")}
              </NavLink>
              <NavLink to={`/${i18n.language}#contact-us`} className="hover:text-pink-300">
                {t("HERO.CONTACT")}
              </NavLink>
            </div>
          )}

          <div className="nav-controls flex justify-between items-center gap-4 md:gap-6">
            {authState.status === "succeeded" && authState.user && (
              <Link to={`/${i18n.language}/user-information`} className="hidden md:flex items-center gap-2 ">
                {userAvatar ? <img src={userAvatar} alt="logo" className="w-10 h-10 rounded-full" /> : <img className="w-6" src={user} alt="logo" />}
              </Link>
            )}

            <LoadingButton
              loading={authState.status === "loading"}
              onClick={authState.status === "succeeded" && authState.user ? handleSignOut : toggleModal}
              className="hidden md:block signIn-btn p-1 md:p-2"
              btnText={authState.status === "succeeded" && authState.user ? t("USER.LOG_OUT") : t("USER.SIGN_IN")}
            />

            {showchangelanguage() && (
              <div className=" flex justify-between items-center">
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
            )}

            <button onClick={toggleMenu} className={`md:hidden menu-button ${isMenuOpen ? "open" : ""}`}>
              <span className="menu-icon"></span>
              <span className="menu-icon"></span>
              <span className="menu-icon"></span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu flex flex-col gap-6 items-center justify-center shadow-lg py-10  md:hidden">
            {authState.status === "succeeded" && (
              <>
                <NavLink
                  to={`/${i18n.language}/services`}
                  className={({ isActive }) => (isActive ? "text-pink-300" : "hover:text-pink-300")}
                  onClick={toggleMenu}
                >
                  {t("HERO.DESIGNS")}
                </NavLink>
                <NavLink
                  to={`/${i18n.language}/websites`}
                  className={({ isActive }) => (isActive ? "text-pink-300" : "hover:text-pink-300")}
                  onClick={toggleMenu}
                >
                  {t("HERO.WEBSITES")}
                </NavLink>
                <NavLink to={`/${i18n.language}/pages`} className={({ isActive }) => (isActive ? "text-pink-300" : "hover:text-pink-300")} onClick={toggleMenu}>
                  {t("HERO.PAGES")}
                </NavLink>
                <NavLink to={`/${i18n.language}#contact-us`} className="hover:text-pink-300" onClick={toggleMenu}>
                  {t("HERO.CONTACT")}
                </NavLink>
              </>
            )}

            {authState.status === "succeeded" && authState.user && (
              <Link to={`/${i18n.language}/user-information`} className="flex items-center justify-center gap-2 " onClick={toggleMenu}>
                {userAvatar ? <img src={userAvatar} alt="logo" className="w-10 h-10 rounded-full" /> : <img className="w-6" src={user} alt="logo" />}
                <p className="text-base  md:text-lg ">{authState.userName || authState.user.name}</p>
              </Link>
            )}

            <LoadingButton
              loading={authState.status === "loading"}
              onClick={authState.status === "succeeded" && authState.user ? handleSignOut : toggleModal}
              className="signIn-btn w-10/12 p-1 md:p-2"
              btnText={authState.status === "succeeded" && authState.user ? t("USER.LOG_OUT") : t("USER.SIGN_IN")}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MainNav;
