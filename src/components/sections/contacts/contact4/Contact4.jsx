import React from "react";
import "./contact4.css";

const Contact4 = ({ template }) => {
  const contact = template.contact;
  return (
    <div id="contact-us" className="c-wrapper4">
      <div className="paddings4 innerWidth4 flexCenter4 c-container4">
        {/* left side */}
        <div className="flexColStart4 c-left4">
          <span className="orangeText4">{contact.title}</span>
          <span className="primaryText4">{contact.subtitle}</span>
          <span className="secondaryText4">{contact.description} </span>

          <div className="flexColStart4 contactModes4">
            {/* first row */}
            <div className="flexStart4 row4">
              <div className="flexColCenter4 mode4">
                <div className="flexStart4">
                  <div className="flexCenter4 icon4">
                    <span>📞</span> {/* Phone Icon */}
                  </div>
                  <div className="flexColStart4 detail4">
                    <span className="primaryText4">{contact.contacts[0].type}</span>
                    <span className="secondaryText4">{contact.contacts[0].phone}</span>
                  </div>
                </div>
                <div className="flexCenter4 button4">{contact.contacts[0].buttonText}</div>
              </div>

              <div className="flexColCenter4 mode4">
                <div className="flexStart4">
                  <div className="flexCenter4 icon4">
                    <span>💬</span> {/* Chat Icon */}
                  </div>
                  <div className="flexColStart4 detail4">
                    <span className="primaryText4">{contact.contacts[1].type}</span>
                    <span className="secondaryText4">{contact.contacts[1].phone}</span>
                  </div>
                </div>
                <div className="flexCenter4 button4">{contact.contacts[1].buttonText}</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart4 row4">
              <div className="flexColCenter4 mode4">
                <div className="flexStart4">
                  <div className="flexCenter4 icon4">
                    <span>📞</span>
                  </div>
                  <div className="flexColStart4 detail4">
                    <span className="primaryText4">{contact.contacts[2].type}</span>
                    <span className="secondaryText4">{contact.contacts[2].phone}</span>
                  </div>
                </div>
                <div className="flexCenter4 button4">{contact.contacts[2].buttonText}</div>
              </div>

              <div className="flexColCenter4 mode4">
                <div className="flexStart4">
                  <div className="flexCenter4 icon4">
                    <span>💬</span> {/* Chat Icon */}
                  </div>
                  <div className="flexColStart4 detail4">
                    <span className="primaryText4">{contact.contacts[3].type}</span>
                    <span className="secondaryText4">{contact.contacts[3].phone}</span>
                  </div>
                </div>
                <div className="flexCenter4 button4">{contact.contacts[3].buttonText}</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd4 c-right4">
          <div className="image-container4">
            <img src={contact.imgUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact4;
