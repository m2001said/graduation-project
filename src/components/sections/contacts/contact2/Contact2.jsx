import React from "react";
import "./contact2.css";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const ContactUs2 = () => {
  const form = useRef();
  const { pathname } = useLocation();
  const contact = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.contact;
    } else {
      return state.template2.contact;
    }
  });

  return (
    <div id="contactUs2">
      <h5 className="text-light">{contact.subtitle}</h5>
      <h2>{contact.title}</h2>

      <div className="container contactUs2__container">
        <div id="contactUs2" className="contactUs2__options">
          {contact.options.map((option, index) => (
            <article className="contactUs2__option" key={index}>
              <img src={option.logo} alt={`${option.title} Logo`} className="contactUs2__option-logo" />
              <h4>{option.title}</h4>
              <h5>{option.subtitle}</h5>
              <a href={option.link} target="_blank" rel="noopener noreferrer">
                {option.title === "Send a message" ? contact.sendMessage.title : option.title}
              </a>
            </article>
          ))}
        </div>

        <form ref={form} className="form2" onSubmit={contact.send.action}>
          <input type="text" name="name" placeholder="Your Full Name" className="input2" required />
          <input type="email" name="email" placeholder="Your email" className="input2" required />
          <textarea name="message" placeholder="Your Message" rows="7" className="txt-area2" required></textarea>
          <button type="submit" className="btn-2">
            {contact.send.title}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs2;
