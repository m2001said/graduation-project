import React from "react";
import "./contact4.css";
import { useSelector } from "react-redux";

const Contact4 = () => {
  const { contact4 } = useSelector((state) => state.template4);

  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">{contact4.title}</span>
          <span className="primaryText">{contact4.sub_title}</span>
          <span className="secondaryText">{contact4.description} </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <span>📞</span> {/* Phone Icon */}
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">{contact4.contacts[0].type}</span>
                    <span className="secondaryText">{contact4.contacts[0].phone}</span>
                  </div>
                </div>
                <div className="flexCenter button">{contact4.contacts[0].btn_contact}</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <span>💬</span> {/* Chat Icon */}
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">{contact4.contacts[1].type}</span>
                    <span className="secondaryText">{contact4.contacts[1].phone}</span>
                  </div>
                </div>
                <div className="flexCenter button">{contact4.contacts[1].btn_contact}</div>
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
                    <span className="primaryText">{contact4.contacts[2].type}</span>
                    <span className="secondaryText">{contact4.contacts[2].phone}</span>
                  </div>
                </div>
                <div className="flexCenter button">{contact4.contacts[2].btn_contact}</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <span>💬</span> {/* Chat Icon */}
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">{contact4.contacts[3].type}</span>
                    <span className="secondaryText">{contact4.contacts[3].phone}</span>
                  </div>
                </div>
                <div className="flexCenter button">{contact4.contacts[3].btn_contact}</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src={contact4.UrlImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact4;
