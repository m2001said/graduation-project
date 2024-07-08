import "../components/designsPage/sections/designsContainer.css";
import DesignCard from "../components/designsPage/sections/designsCard/DesignCard";

import ai from "../assets/images/designs/ai.webp";
import websites from "../assets/images/websites.jpg";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/mainPage/stepsGuide/stepsGuide.css";
import "../components/designsPage/sections/designsContainer.css";
import services1 from "../assets/images/mainPageAssets/services1.webp";
import services2 from "../assets/images/mainPageAssets/services2.webp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../components/mainPage/header/header.css";
const Services = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const stepsData = [
    {
      title: t("SERVICES.SERVICES.TITLE_1"),
      description: t("SERVICES.SERVICES.DESCRIPTION_1"),
      imageUrl: services1,
      item: `/${language}/designs`,
    },
    {
      title: t("SERVICES.SERVICES.TITLE_2"),
      description: t("SERVICES.SERVICES.DESCRIPTION_2"),
      imageUrl: services2,
      item: `/${language}/page-craft`,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="main-steps designs-section">
      <h1 className="text-3xl font-bold tracking-tighter mb-4 text-center text-white sm:text-4xl md:text-5xl lg:text-6xl/none">{t("SERVICES.TITLE")}</h1>
      <div className="container mx-auto px-6">
        {stepsData.map((item, index) => (
          <div className="step-card flex justify-between" key={index} data-aos={index % 2 === 0 ? "fade-up" : "fade-up"} data-aos-duration="1000">
            <Link to={item.item} className="step-info">
              <p className="step-title text-white hover:text-purple-200">{item.title}</p>
              <p className="step-description mt-2 text-purple-100">{item.description}</p>
            </Link>
            <div className="step-img">
              <img src={item.imageUrl} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-10 flex-wrap">
        <Link className="info-section h-auto !pt-10" to={`/${i18n.language}/services`}>
          <button className="info-btn"> {t("WEBSITES.TITLE")}</button>
        </Link>
        <Link className="info-section h-auto !pt-10" to={`/${i18n.language}/services`}>
          <button className="info-btn admin-btn"> {t("PAGES.TITLE")}</button>
        </Link>
      </div>
    </div>
  );
};
export default Services;
