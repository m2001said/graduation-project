import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import "./feature5_2.css";

// import Aos from 'aos'
// import "aos/dist/aos.css"

const Feature5_2 = () => {

  // useEffect(()=>{
  //   Aos.init({duration: 2000})
  // },[])

    const { feature2 } = useSelector((state) => state.template5);

  return (
    <div className="feature5_2 design5-container design5-section">
      <div className="featue5_2-main">
        <div className="feature5_2-imgDiv">
          <img src={feature2.imgUrl} alt="" className="feature5_2-image" />
        </div>

        <div className="feature5_2-text">
          <h2>{feature2.title}</h2>

          <div className="feature5_2-cards design5-grid">
            {feature2.features.map((content, index) => (
              <div key={index} className="feature5_2-singleCard">
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
