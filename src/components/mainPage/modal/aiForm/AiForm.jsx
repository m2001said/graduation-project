import React, { useState } from "react";
import axios from "axios";
import "./aiForm.css";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Loader from "../../../Loader/Loader";
import { updateTemplate, templateActions1 } from "../../../../features/templateData/templateSlice";

const AiForm = ({ index }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [overview, setOverview] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOverviewChange = (event) => {
    setOverview(event.target.value);
  };

  const openDesign = async () => {
    console.log(overview);
    setLoading(true);
    try {
      const AiResponse = await axios.post("https://web-production-8c67.up.railway.app/generate-schema", {
        user_text: overview,
        TemplateId: index,
      });
      console.log(AiResponse.data);
      dispatch(templateActions1.updateSchema(AiResponse.data));

      const backResponse = await axios.post("https://websitebuilderbackend-production-716e.up.railway.app/page", AiResponse.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const templateId = backResponse.data.savedPage["_id"];
      console.log(backResponse.data);
      navigate(`/${i18n.language}/edit-zweb${index}?id=${templateId}`);

      // window.location.reload();
    } catch (error) {
      console.error("Error in ai:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <h3 className="ai-form-title">{t("USER.CREATE_WEBSITE")} </h3>
      <p className="ai-form-description">{t("USER.WEBSITE_OVERVIEW")}</p>
      <textarea
        name="overview"
        id="websiteOverview"
        required
        autoFocus
        cols="30"
        rows="10"
        placeholder={t("USER.OVERVIEW")}
        value={overview}
        onChange={handleOverviewChange}
      ></textarea>
      <button className="form-button button-2" onClick={openDesign}>
        {t("USER.BUILD")}
      </button>
      {/* {error && <small>{error}</small>} */}
    </>
  );
};

export default AiForm;
