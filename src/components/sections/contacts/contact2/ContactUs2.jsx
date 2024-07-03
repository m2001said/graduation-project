import React, { useRef } from "react";
import "./contact2.css";

const ContactUs2 = ({ template }) => {
  const contact = template.contact;

  return (
    <div id="contactUs2">
      <h5 className="text-light">{contact.subtitle}</h5>
      <h2>{contact.title}</h2>

      <div className="container contactUs2__container">
        <div id="contactUs2" className="contactUs2__options">
          {contact.contacts.map((contacts, index) => (
            <article className="contactUs2__option" key={index}>
              <img src={contacts.imgUrl} alt={`${contacts.type} Logo`} className="contactUs2__option-logo" />
              <h4>{contacts.type}</h4>
              <h5>{contacts.title}</h5>
              <a href={contacts.email} target="_blank" rel="noopener noreferrer">
                {contacts.buttonText === "Send a message" ? contact.button.url : contacts.buttonText}
              </a>
            </article>
          ))}
        </div>

        <form className="form2" onSubmit={contact.linkText}>
          <input type="text" name="name" placeholder="Your Full Name" className="input2" required />
          <input type="email" name="email" placeholder="Your email" className="input2" required />
          <textarea name="message" placeholder="Your Message" rows="7" className="txt-area2" required></textarea>
          <button type="submit" className="btn-2 color-[var(--website-2-color-2)]">
            {contact.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs2;