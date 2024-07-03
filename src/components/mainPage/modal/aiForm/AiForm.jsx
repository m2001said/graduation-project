import React from "react";
import axios from "axios";
import "./aiForm.css";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
// import { useSelector } from "react-redux";

const AiForm = ({ index }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  // const template = useSelector((state) => state[`template${index}`]);

  const openDesign = async () => {
    // try {
    //   const response = await axios.post("https://websitebuilderbackend-production-716e.up.railway.app/page", template, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   });

    //   const pageId = response.data.savedPage["_id"];
    //   console.log(response.data);
    //   navigate(`/build-trial-design${index}/${pageId}`);
    // } catch (error) {
    //   console.error("Error:", error.response ? error.response.data : error.message);
    // }
    navigate(`/${i18n.language}/build-trial-design${index}`);
  };

  return (
    <>
      <h3 className="ai-form-title">{t("USER.CREATE_WEBSITE")} </h3>
      <p className="ai-form-description">{t("USER.WEBSITE_OVERVIEW")}</p>
      <textarea name="overview" id="websiteOverview" required autoFocus cols="30" rows="10" placeholder={t("USER.OVERVIEW")}></textarea>
      <button className="form-button button-2" onClick={openDesign}>
        {t("USER.BUILD")}
      </button>
    </>
  );
};

export default AiForm;
