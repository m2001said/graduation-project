import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./footer.css";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/images/mainPageAssets/logo.svg";

const Footer = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <div className="footer-section flex items-center justify-center flex-col gap-5">
        <Link to={`/${i18n.language}`}>
          <div dir="ltr" className="main-logo flex items-center">
            <img src={logo} alt="logo" />
            <span>WEB</span>
          </div>
        </Link>

        <p className="text-lg"> {t("HERO.FOOTER")}</p>
      </div>
    </>
  );
};

export default Footer;
