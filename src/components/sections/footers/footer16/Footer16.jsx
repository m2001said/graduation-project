import React from "react";
import "./footer16.css";
import { useSelector } from "react-redux";

const Footer16 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.footer);
  const footer = template ? template.footer : ownFooter;
  
  return (
    <footer className="footer16">
      <div className="footer__grid16 container16 grid16">
        <div className="footer__content16">
          <a href="/" className="footer__logo16">
            <img src={footer.imgUrl} alt="Logo" className="footer__logo-img16" />
          </a>
          <p className="footer__description16">{footer.description}</p>
          <ul className="footer__contact16">
            {footer.contacts.map(({ value, icon }, index) => (
              <li className="footer__contact_item16" key={index}>
                {icon} {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__content16">
          <h3 className="footer__title16">Quick Links</h3>
          <ul className="footer__links16">
            {footer.footerSections
              .filter((section) => section.title === "quickLinks")
              .flatMap((section) => section.links)
              .map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
          </ul>
        </div>

        <div className="footer__content16">
          <h3 className="footer__title16">Opening Hours</h3>
          <ul className="footer__opening-hour16">
            {footer.footerSections
              .filter((section) => section.title === "openingHours")
              .flatMap((section) => section.links)
              .map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
          </ul>
        </div>

        <div className="footer__content16">
          <h3 className="footer__title16">Newsletter</h3>
          <p className="footer_description16">Subscribe to Our Newsletter to Get Latest Updates and News</p>
          <form action="" className="subscribe__form16">
            <input type="email" placeholder="Your Email" className="form__input subscribe__input16" />
            <button className="btn16 btn--flex16 subscribe__btn16">✉ Subscribe Now</button>
          </form>
          <div className="footer__socials16">
            <h3 className="footer__social-follow16">Follow Us:</h3>
            <div className="footer__social-links16">
              {footer.medias.map(({ icon, url }, index) => (
                <a href={url} className="footer__social-link16" key={index}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="copyright__text">&copy; {footer.subtitle}</p>
    </footer>
  );
};

export default Footer16;
