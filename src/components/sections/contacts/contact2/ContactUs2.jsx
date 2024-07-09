import { useSelector } from "react-redux";
import "./contact2.css";
import { useTranslation } from "react-i18next";

const ContactUs2 = ({ template }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const ownContact= useSelector((state) => state.ownTemplate.contact);
  const contact = template ? template.contact : ownContact;

  return (
    <div id={contact.sectionId} className="pt-24 pb-9 section2 contact2">
      <h5 className="text-light2">{contact.subtitle}</h5>
      <h2>{contact.title}</h2>

      <div className="container2 contactUs2__container">
        <div id="contactUs2" className="contactUs2__options">
          {contact.contacts.map((contacts, index) => (
            <article className="contactUs2__option" key={index}>
              <img src={contacts.imgUrl} alt={`${contacts.type} Logo`} className="contactUs2__option-logo2" />
              <h4>{contacts.type}</h4>
              <h5>{contacts.title}</h5>
              <a href={contacts.email} target="_blank" className="a2" rel="noopener noreferrer">
                {contacts.buttonText === "Send a message" ? contact.button.url : contacts.buttonText}
              </a>
            </article>
          ))}
        </div>

        <form className="form2" onSubmit={contact.linkText}>
          <input type="text" name="name" placeholder={isRTL ? "ادخل اسمك" : "Enter your name"} className="input2" required />
          <input type="email" name="email" placeholder={isRTL ? "ادخل بريدك الالكتروني" : "Your email"} className="input2" required />
          <textarea name="message" placeholder={isRTL ? "ادخل رسالتك" : "Your message"} rows="7" className="txt-area2" required></textarea>
          <button type="submit" className="btn2 bg-[var(--website-2-color-2)]">
            {contact.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs2;
