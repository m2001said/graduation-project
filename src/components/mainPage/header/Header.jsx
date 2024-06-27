import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import { Link } from "react-router-dom";
import hero from "../../../assets/images/mainPageAssets/hero-min.svg";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Header = ({ toggleModal }) => {
  const { t, i18n } = useTranslation();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <header className="main-header">
        <div className="container mx-auto px-4">
          <div className="info-section flex gap-5 justify-between items-center py-8">
            <div className="hero-info" data-aos="fade-right" data-aos-duration="1000">
              <h1 className="info-title"> {t("HERO.TITLE")}</h1>
              <p className="info-description"> {t("HERO.DESCRIPTION")} </p>
              {authState.status === "succeeded" ? (
                <Link to={`/${i18n.language}/designs`}>
                  <button className="info-btn"> {t("HERO.BUTTONTEXT")}</button>
                </Link>
              ) : (
                <button className="info-btn" onClick={toggleModal}>
                  {t("HERO.BUTTONTEXT")}
                </button>
              )}
            </div>
            <div className="main-hero-image">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
