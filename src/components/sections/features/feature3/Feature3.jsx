import React from "react";
import "./feature3.css";
import { useSelector } from "react-redux";

const Feature3 = () => {
  const { feature3 } = useSelector((state) => state.template3);

  return (
    <div className="Reasons3" id="reasons3">
      <div className="left-r3">
        <img src={feature3.imgUrl[0].imgUrll} alt="" />
        <img src={feature3.imgUrl[0].imgUrl2} alt="" />
        <img src={feature3.imgUrl[0].imgUrl3} alt="" />
        <img src={feature3.imgUrl[0].imgUrl4} alt="" />
      </div>
      <div className="right-r3">
        <span>{feature3.Subtitle}</span>
        <div>
          <span className="stroke-text">{feature3.title[0].titleA} </span>
          <span>{feature3.title[0].titleB}</span>
        </div>
        <div className="details-r3">
          <div>
            <img src={feature3.imgUrl[0].imgUrl6} alt="" />
            <span>{feature3.description[0].description1}</span>
          </div>
          <div>
            <img src={feature3.imgUrl[0].imgUrl6} alt="" />
            <span>{feature3.description[0].description2}</span>
          </div>
          <div>
            <img src={feature3.imgUrl[0].imgUrl6} alt="" />
            <span>{feature3.description[0].description3}</span>
          </div>
          <div>
            <img src={feature3.imgUrl[0].imgUrl6} alt="" />
            <span>{feature3.description[0].description4}</span>
          </div>
        </div>
        <span style={{ color: "#808080", fontWeight: "normal" }}>{feature3.description[0].description5}</span>
        <div className="partners3">
          <img src={feature3.imgUrl[0].imgUrl5} alt="" />
          <img src={feature3.imgUrl[0].imgUrl8} alt="" />
          <img src={feature3.imgUrl[0].imgUrl7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature3;
