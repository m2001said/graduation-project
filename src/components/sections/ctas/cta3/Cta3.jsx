import React from "react";
import "./cta3.css";
import { useSelector } from "react-redux";

const Cta3 = () => {
  const { cta } = useSelector((state) => state.template3);

  return (
    <div className="Join3" id="join3">
      <div className="left-c3">
        <hr />
        <div>
          <span className="stroke-text">{cta.title.titleA}</span>
          <span>{cta.title.titleB}</span>
        </div>
        <div>
          <span>{cta.title.titleC}</span>
          <span className="stroke-text">{cta.title.titleD}</span>
        </div>
      </div>
      <div className="right-c3">
        <form className="email3-container">
          <input className="email3-container-input" type="email" name="user_email" placeholder="Enter Your Email address" />
          <button className="btn btn-c3">{cta.buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default Cta3;
