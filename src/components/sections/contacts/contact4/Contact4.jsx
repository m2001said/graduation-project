import React from "react";
import "./contact4.css";

const Contact4 = ({ template }) => {
  const contact = template.contact;
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">{contact.title}</span>
          <span className="primaryText">{contact.subtitle}</span>
          <span className="secondaryText">{contact.description} </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <span>📞</span> {/* Phone Icon */}
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">{contact.contacts[0].type}</span>
                    <span className="secondaryText">{contact.contacts[0].phone}</span>
                  </div>
                </div>
                <div className="flexCenter button">{contact.contacts[0].buttonText}</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <span>💬</span> {/* Chat Icon */}
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">{contact.contacts[1].type}</span>
                    <span className="secondaryText">{contact.contacts[1].phone}</span>
                  </div>
                </div>
                <div className="flexCenter button">{contact.contacts[1].buttonText}</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <span>📞</span>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">{contact.contacts[2].type}</span>
                    <span className="secondaryText">{contact.contacts[2].phone}</span>
                  </div>
                </div>
                <div className="flexCenter button">{contact.contacts[2].buttonText}</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <span>💬</span> {/* Chat Icon */}
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">{contact.contacts[3].type}</span>
                    <span className="secondaryText">{contact.contacts[3].phone}</span>
                  </div>
                </div>
                <div className="flexCenter button">{contact.contacts[3].buttonText}</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src={contact.imgUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact4;
