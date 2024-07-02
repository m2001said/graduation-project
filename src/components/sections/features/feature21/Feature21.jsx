import React,{useEffect} from "react";
import "./feature5_2.css";

const Feature5_2 = ({ template }) => {
  const feature2 = template.blogs;

  return (
    <div className="feature5_2 design5 design5-container design5-section">
      <div className="featue5_2-main">
        <div className="feature5_2-imgDiv">
          <img src={feature2.imgUrl} alt="" className="feature5_2-image" />
        </div>

        <div className="feature5_2-text">
          <h2>{feature2.title}</h2>

          <div className="feature5_2-cards design5-grid">
            {feature2.blogs.map((content, index) => (
              <div key={index} className="feature5_2-singleCard">
                <span className="singleCard-title">{content.title}</span>
                <p>{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature5_2;
