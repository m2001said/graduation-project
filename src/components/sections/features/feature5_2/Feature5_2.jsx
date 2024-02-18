import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./feature5_2.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Feature5_2 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { features2 } = useSelector((state) => state.template5);
  const feature5_2 = features2;
  return (
    <div className="feature5_2 design5-container design5-section">
      <div className="featue5_2-main">
        <div data-aos="fade-down" data-aos-duration="2500" className="feature5_2-imgDiv">
          <img src={feature5_2.imgUrl} alt="" className="feature5_2-image" />
        </div>

        <div className="feature5_2-text">
          <h2 data-aos="fade-down" data-aos-duration="2500">
            {feature5_2.title}
          </h2>

          <div className="feature5_2-cards design5-grid">
            {feature5_2.blocks.map((content, index) => (
              <div key={index} data-aos="fade-down" data-aos-duration="2500" className="feature5_2-singleCard">
                <span className="singleCard-title">{content.head}</span>
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
