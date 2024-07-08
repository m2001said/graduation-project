import React,{useEffect} from "react";
import "./feature5_1.css";



const Feature5 = ({template}) => {
const feature1 = template.features;

return (
  <div className="feature5_1 design5-section design5">
    <div className="feature5_1-mainSection">
      <div className="feature5_1-title">
        <small>{feature1.subtitle}</small>
        <h2>{feature1.title}</h2>
        <p>{feature1.description}</p>
      </div>

      <div className="feature5_1-info">
        <div className="feature5_1-info-text">
          {feature1.features.map((content, index) => (
            <div key={index} className="feature5_1-singleInfo">
              <span className={`feature5_1-number${index}`}>{content.number}</span>
              <h4>{content.title}</h4>
              <p>{content.description}</p>
            </div>
          ))}
        </div>

        <div className="feature5_1-info-imgDiv">
          <img src={feature1.imgUrl} alt="" />
        </div>
      </div>
    </div>
  </div>
);
};

export default Feature5;
