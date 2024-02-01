import React from "react";
import "./deployForm.css";

const AiForm = () => {
  const toggleForm = () => {
    document.querySelector(".modal-overlay").classList.add("closed");
  };
  return (
    <>
      <h1> تم النشر </h1>
      <div className="deploy-form-link">
        <p className="deploy-form-label"> لينك موقعك </p>
        <p className="website-link">Abdo.website.vercel.com</p>
      </div>
      <div className="deploy-buttons">
        <button className="form-button button-2">الذهاب للموقع</button>
        <button onClick={toggleForm}>رجوع</button>
      </div>
    </>
  );
};

export default AiForm;
