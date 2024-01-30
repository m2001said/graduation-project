import React from "react";

const AiForm = () => (
  <>
    <h1 className="ai-form-title">create your website quickly with the artificial intelligence </h1>
    <p className="ai-form-description">write an overview of your project idea in 3 lines</p>
    <textarea name="overview" id="websiteOverview" required autofocus cols="30" rows="10" placeholder="website overview"></textarea>
    <button className="form-button form-2-button">Build your website now</button>
  </>
);

export default AiForm;
