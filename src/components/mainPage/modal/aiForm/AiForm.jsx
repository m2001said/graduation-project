import React from "react";
import axios from "axios";
import "./aiForm.css";
import { useNavigate } from "react-router";
// import { useSelector } from "react-redux";

const AiForm = ({ index }) => {
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
    navigate(`/build-trial-design${index}`);
  };

  return (
    <>
      <h3 className="ai-form-title">create your website quickly with artificial intelligence </h3>
      <p className="ai-form-description">write an overview of your project idea in 3 lines</p>
      <textarea name="overview" id="websiteOverview" required autoFocus cols="30" rows="10" placeholder="website overview"></textarea>
      <button className="form-button button-2" onClick={openDesign}>
        Build your website now
      </button>
    </>
  );
};

export default AiForm;
