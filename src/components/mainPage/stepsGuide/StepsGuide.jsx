import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./stepsGuide.css";
import ai from "../../../assets/images/mainPageAssets/ai.svg";
import signin from "../../../assets/images/mainPageAssets/signin.svg";
import ways from "../../../assets/images/mainPageAssets/ways.svg";
import deploy from "../../../assets/images/mainPageAssets/deploy.svg";
import deploy2 from "../../../assets/images/mainPageAssets/deploy2.webp";
import { useTranslation } from "react-i18next";

const Steps = () => {
  const { t } = useTranslation();

  const stepsData = [
    {
      title: t("STEPS.TITLE_1"),
      description: t("STEPS.DESCRIPTION_1"),
      imageUrl: signin,
    },
    {
      title: t("STEPS.TITLE_2"),
      description: t("STEPS.DESCRIPTION_2"),
      imageUrl: ways,
    },
    {
      title: t("STEPS.TITLE_3"),
      description: t("STEPS.DESCRIPTION_3"),
      imageUrl: ai,
    },
    {
      title: t("STEPS.TITLE_4"),
      description: t("STEPS.DESCRIPTION_4"),
      imageUrl: deploy,
    },
    {
      title: t("STEPS.TITLE_5"),
      description: t("STEPS.DESCRIPTION_5"),
      imageUrl: deploy2,
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
    <div className="main-steps">
      <div className="container mx-auto px-4 px-6">
        {stepsData.map((item, index) => (
          <div className="step-card flex justify-between" key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="1000">
            <div className="step-info">
              <h1 className="step-title">{item.title}</h1>
              <p className="step-description">{item.description}</p>
            </div>
            <div className="step-img">
              <img src={item.imageUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Steps;
