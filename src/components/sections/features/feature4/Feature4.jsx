import React, { useState } from "react";
import "./feature4.css";
import { useSelector } from "react-redux";

const Feature4 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.features);
  const features = template ? template.features : ownFooter;

  const [expandedIndex, setExpandedIndex] = useState(0); // Default to first item being open

  const handleAccordionState = (index) => {
    if (expandedIndex !== index) {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="value4" className="v-wrapper4" id={features.sectionId}>
      <div className="paddings4 innerWidth4 flexCenter4 v-container4">
        {/* left side */}
        <div className="v-left4">
          <div className="image-container4">
            <img src={features.imgUrl} alt="loading" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart4 v-right4">
          <span className="orangeText4">{features.title}</span>

          <span className="primaryText4">{features.subtitle}</span>

          <span className="secondaryText4 text-m-des4">
            {features.description}
            <br />
            {features.text}
          </span>

          <div className="accordion4 text4">
            {features.features.map((item, i) => (
              <div className={`accordionItem4 ${expandedIndex === i ? "expanded4" : "collapsed4"}`} key={i}>
                <div className="accordionItemHeading4">
                  <button className="flexCenter4 accordionButton4" onClick={() => handleAccordionState(i)}>
                    <div className="flexCenter4 icon4">✔</div>
                    <span className="primaryText4">{item.title}</span>
                    <div className="flexCenter4 icon4 text4">{expandedIndex === i ? "🔺" : "🔻"}</div>
                  </button>
                </div>
                {expandedIndex === i && (
                  <div className="accordionItemPanel4">
                    <p className="secondaryText4 feature-des4">{item.description}</p>
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
