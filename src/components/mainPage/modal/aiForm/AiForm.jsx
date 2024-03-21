import React from "react";
import "./aiForm.css";
import { useNavigate } from "react-router";

const AiForm = ({index}) => {
  const navigate = useNavigate();
  const openDesign = () => {
    navigate(`/build-trial-design${index}`);
  }
  
  return (
    <>
      <h3 className="ai-form-title">create your website quickly with artificial intelligence </h3>
      <p className="ai-form-description">write an overview of your project idea in 3 lines</p>
      <textarea name="overview" id="websiteOverview" required autoFocus cols="30" rows="10" placeholder="website overview"></textarea>
      <button className="form-button button-2" onClick={openDesign}>Build your website now</button>
    </>
  );
};

export default AiForm;
