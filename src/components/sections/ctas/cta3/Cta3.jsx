import React, { useRef } from "react";
import "./cta3.css";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
const Cta3 = () => {
  const { cta3 } = useSelector((state) => state.template3);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="Join3" id="join3">
      <div className="left-c3">
        <hr />
        <div>
          <span className="stroke-text">{cta3.title[0].titleA}</span>
          <span>{cta3.title[0].titleB}</span>
        </div>
        <div>
          <span>{cta3.title[0].titleC}</span>
          <span className="stroke-text">{cta3.title[0].titleD}</span>
        </div>
      </div>
      <div className="right-c3">
        <form ref={form} className="email3-container" onSubmit={sendEmail}>
          <input className="email3-container-input" type="email" name="user_email" placeholder="Enter Your Email address" />
          <button className="btn btn-c3">{cta3.buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default Cta3;
