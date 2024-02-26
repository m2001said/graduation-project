import React from "react";
import "./footer6.css";
import { useSelector } from "react-redux";

const Footer6 = () => {
  const { footer } = useSelector((state) => state.template6);

  return (
    <footer className="footer6">
      <div className="footer__top">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="logo">
            <div className=" d-flex align-items-center gap-1 mb-4">
              <img src={footer.logo} alt="" className="design6-logo" />
            </div>
            <p>{footer.description}</p>
          </div>

          <div className="footer__links">
            <h5 className="footer__link-title">{footer.infoLinks.title}</h5>
            <div>
              {footer.infoLinks.content.map((item, index) => (
                <div key={index} className="link__item my-3">
                  <a href="">{item}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <h5 className="footer__link-title">{footer.quickLinks.title}</h5>
            <div>
              {footer.quickLinks.content.map((item, index) => (
                <div key={index} className="link__item my-3">
                  <a href={`#${footer.quickLinks.links[index]}`}>{item}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <h5 className="footer__link-title">{footer.contact.title}</h5>
            <div>
              {footer.contact.content.map((item) => (
                <div className="link__item  flex items-center gap-3 my-3">
                  <img src={item.icon} alt="" className="ico" />
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container mx-auto">
          <div className="text-center">
            <p>{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer6;
