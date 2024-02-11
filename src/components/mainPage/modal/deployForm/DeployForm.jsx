import React from "react";
import "./deployForm.css";

const AiForm = () => {
  const toggleForm = () => {
    document.querySelector(".modal-overlay").classList.add("closed");
  };
  return (
    <>
      <h1> Published </h1>
      <div className="deploy-form-link">
        <p className="deploy-form-label"> Your website link </p>
        <p className="website-link">Abdo.website.vercel.com</p>
      </div>
      <div className="deploy-buttons">
        <button className="form-button button-2">Go to the website</button>
        <button onClick={toggleForm}>Back</button>
      </div>
    </>
  );
};

export default AiForm;
