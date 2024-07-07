import React from "react";
import "./feature12.css";
import { useSelector } from "react-redux";
const Feature12 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.features);
  const features = template ? template.features : ownFooter;
  return (
    <div className="container12">
      <h2 className=" title12 section__title16">{features.title}</h2>
      <div className="programs12">
        {features.features.map((features, index) => (
          <div className="program12" key={index}>
            <img src={features.imgUrl} alt={features.title} />
            <div className="caption12">
              <img src={features.icon} alt={features.title} />
              <p>{features.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature12;
