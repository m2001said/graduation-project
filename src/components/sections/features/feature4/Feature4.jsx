import React, { useState } from "react";
import "./feature4.css";
import { useSelector } from "react-redux";

const Feature4 = () => {
  const { feature4 } = useSelector((state) => state.template4);

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
            <img src={feature4.imgUrl} alt="image of value" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">{feature4.title}</span>

          <span className="primaryText">{feature4.sub_title}</span>

          <span className="secondaryText">
            {feature4.description1}
            <br />
            {feature4.description2}
          </span>

          <div className="accordion">
            {feature4.data.map((item, i) => (
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