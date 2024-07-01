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
              <img src={contacts.imgUrl} alt={`${contacts.title} Logo`} className="contactUs2__option-logo" />
              <h4>{contacts.title}</h4>
              <h5>{contacts.subtitle}</h5>
              <a href={contacts.mail} target="_blank" rel="noopener noreferrer">
                {contacts.title === "Send a message" ? contact.button.url : contacts.title}
              </a>
            </article>
          ))}
        </div>

        <form className="form2" onSubmit={contact.button.url}>
          <input type="text" name="name" placeholder="Your Full Name" className="input2" required />
          <input type="email" name="email" placeholder="Your email" className="input2" required />
          <textarea name="message" placeholder="Your Message" rows="7" className="txt-area2" required></textarea>
          <button type="submit" className="btn-2 color-[var(--website-2-color-2)]">
            {contact.button.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs2;
