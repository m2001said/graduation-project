import React, { useState } from "react";
import "./feature4.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Feature4 = () => {
  const { pathname } = useLocation();
  const features = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.features;
    } else {
      return state.template4.features;
    }
  });
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionState = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src={features.imgUrl} alt="loading" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">{features.title}</span>

          <span className="primaryText">{features.sub_title}</span>

          <span className="secondaryText">
            {features.description1}
            <br />
            {features.description2}
          </span>

          <div className="accordion">
            {features.features.map((item, i) => (
              <div className={`accordionItem ${expandedIndex === i ? "expanded" : "collapsed"}`} key={i}>
                <div className="accordionItemHeading">
                  <button className="flexCenter accordionButton" onClick={() => handleAccordionState(i)}>
                    <div className="flexCenter icon">✔</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">{expandedIndex === i ? "🔺" : "🔻"}</div>
                  </button>
                </div>
                {expandedIndex === i && (
                  <div className="accordionItemPanel">
                    <p className="secondaryText">{item.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature4;
