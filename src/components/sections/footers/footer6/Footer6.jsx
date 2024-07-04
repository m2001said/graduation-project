import React from "react";
import "./footer6.css";

const Footer6 = ({ template }) => {
  const footer = template.footer;

  return (
    <footer className="footer6">
      <div className="footer__top">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="logo">
            <div className=" d-flex align-items-center gap-1 mb-4">
              <img src={footer.icon} alt="" className="design6-logo" />
            </div>
            <p className="footer-description">{footer.description}</p>
          </div>
          {footer.footerSections.map((section, index) => (
            <div className="footer__links" key={index}>
              <h5 className="footer__link-title">{section.title}</h5>
              <div>
                {section.links.map((item, index) => (
                  <div key={index} className="link__item my-3">
                    <a href={item.url}>{item.title}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="footer__links">
            <h5 className="footer__link-title">Contact</h5>
            <div>
              {footer.contacts.map((item, index) => (
                <div className="link__item  flex items-center gap-3 my-3" key={index}>
                  <img src={item.icon} alt="" className="ico" />
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="footer-copyright">{footer.title}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer6;
