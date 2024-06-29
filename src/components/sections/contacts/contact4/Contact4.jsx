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
          <span className="primaryText">{contact.sub_title}</span>
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
                <div className="flexCenter button">{contact.contacts[0].btn_contact}</div>
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
                <div className="flexCenter button">{contact.contacts[1].btn_contact}</div>
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
                <div className="flexCenter button">{contact.contacts[2].btn_contact}</div>
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
                <div className="flexCenter button">{contact.contacts[3].btn_contact}</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src={contact.UrlImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact4;
