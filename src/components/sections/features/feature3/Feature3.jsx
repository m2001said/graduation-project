import React from "react";
import "./feature3.css";
import { useSelector } from "react-redux";

const Feature3 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.features);
  const feature = template ? template.features : ownFooter;
  return (
    <div className="Reasons3" id={feature.sectionId}>
      <div className="left-r3">
        {feature.imgs.slice(0, 4).map((url, index) => (
          <img key={`image-${index}`} src={url} alt="" />
        ))}
      </div>
      <div className="right-r3">
        <span>{feature.subtitle}</span>
        <div>
          <span className="stroke-text">{feature.title}</span>
        </div>
        <div className="details-r3">
          {feature.features.map((item, index) => (
            <div key={`stat-${index}`}>
              <img src={feature.imgs[5]} alt="" />
              <span>{item.description}</span>
            </div>
          ))}
        </div>
        <span style={{ color: "#808080", fontWeight: "normal" }}>{feature.features[4].description}</span>
        <div className="partners3">
          <img src={feature.imgs[4]} alt="" />
          <img src={feature.imgs[7]} alt="" />
          <img src={feature.imgs[6]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature3;
