import React from "react";
import "./feature.css";
import { useSelector } from "react-redux";
const Featrue1 = () => {
  const { feature } = useSelector((state) => state.template);

  return (
    <div className="feature1 design1">
      <div className="feature1__content">
        <h1 className="feature1__heading">{feature.title}</h1>
        <h2 className="feature1__subheading">{feature.description}</h2>
        <div className="feature1__details">
          <div className="feature1__phone">
            <div className="feature1__icon-background">
              {" "}
              <img src={feature.icon} alt="" />
            </div>
            <div className="feature1__phone-contact">
              <h2>{feature.phone}</h2>
              <h2>Call Us Anytime</h2>
            </div>
          </div>
          <button>
            <p>{feature.buttonText}</p>
            <img src={feature.buttonIcon} alt="" />
          </button>
        </div>
      </div>
      <img className="feature1__img" src={feature.imgUrl} alt="feature pic" />
    </div>

    // <div className="Feature1 design1">
    //   <div className="feature1-layout">
    //     <div className="feature-content">
    //       <div className="sub-content">
    //         <h1>{feature.title}</h1>

    //         <p>{feature.description}</p>
    //       </div>

    //       <div className="contact-container">
    //         <div className="details">
    //           <img src={feature.icon} alt="" />
    //           <div className="phone">
    //             <h1>{feature.phone}</h1>
    //             <h2>Call Us Anytime </h2>
    //           </div>
    //         </div>
    //         <button>
    //           <p>{feature.buttonText}</p>
    //           <img src={feature.buttonIcon} alt="" />
    //         </button>
    //       </div>
    //     </div>

    //     <div className="image-container">
    //       <div className="img-background">
    //         <img src={feature.imgUrl} alt="" />{" "}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Featrue1;
