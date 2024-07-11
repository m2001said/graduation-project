import React from "react";
import "./feature.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Featrue1 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.features);
  const feature = template ? template.features : ownFooter;
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="feature1-layout design-1" id={feature.sectionId}>
      <div className="feature-image-container1">
        <div className="img-background1">
          <img className="feature-img-background1" src={feature.imgUrl} alt="" />{" "}
        </div>
      </div>

      <div className="feature-content1">
        <div className="feature-sub-content1">
          <h1 className="feature-title-1">{feature.title}</h1>

          <p className="description-1">{feature.description}</p>
        </div>

        <div className="feature-contact-container1">
          <div className="feature-contact-details1">
            <div className="featue1-icon-cover">
              <img className="feature-call-icon1" src={feature.icons[0]} alt="" />
            </div>
            <div className="feature-phone1">
              <h1 className="feature-call1 text-[var(--website-1-color-3)] ">{feature.phone}</h1>
              <h2 className="text-[var(--website-1-color-3)] feature-call1">Call Us Anytime </h2>
            </div>
          </div>

          <button className="feature-btn1">
            <p className="text-[var(--website-1-color-1)] btn-txt">{feature.buttonText}</p>
            <img src={feature.icons[1]} className={language === "ar" ? "transform rotate-180" : ""} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featrue1;
