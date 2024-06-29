import React from "react";
import "./footer16.css";

const Footer16 = ({ template }) => {
  const footer = template.footer;

  return (
    <footer className="footer16">
      <div className="footer__grid16 container16 grid16">
        <div className="footer__content16">
          <a href="/" className="footer__logo16">
            <img src={footer.logo} alt="" className="footer__logo-img16" />
          </a>
          <p className="footer__description16">{footer.description}</p>
          <ul className="footer__contact16">
            {footer.contactInfo.map(({ icon, text }, index) => (
              <li className="footer__contact_item16" key={index}>
                {icon} {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__content16">
          <h3 className="footer__title16">Quick Links</h3>
          <ul className="footer__links16">
            {footer.quickLinks.map(({ text, link }, index) => (
              <li key={index}>
                <a href={link} className="footer__link16">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__content16">
          <h3 className="footer__title16">Opening Hours</h3>
          <div className="footer__opening-hour16">
            <ul className="opening_hour-list16">
              {footer.openingHours.map(({ day, time }, index) => (
                <li className="opening_hour-item16" key={index}>
                  <span>{day}:</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__content16">
          <h3 className="footer__title16">Newsletter</h3>
          <p className="footer_description16">Subscribe Our Newsletter To Get Latest Update And News</p>
          <form action="" className="subscribe__form16">
            <input type="email" placeholder="Your Email" className="form__input subscribe__input16" />
            <button className="btn16 btn--flex16 subscribe__btn16">✉ Subscribe Now</button>
          </form>
          <div className="footer__socials16">
            <h3 className="footer__social-follow16">Follow Us:</h3>
            <div className="footer__social-links16">
              {footer.socialLinks.map(({ icon, link }, index) => (
                <a href={link} className="footer__social-link16" key={index}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="copyright__text">
        &copy; Copyright 2023 <span>Coffero</span> All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer16;
