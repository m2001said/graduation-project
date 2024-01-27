import React from "react";
import "./footer3.css";
import { useSelector } from "react-redux";
const Footer3 = () => {
  const { footer3 } = useSelector((state) => state.template3);

  return (
    <div className="footer3-container">
      <hr />
      <div className="footer3">
        <div className="scoil-links-f3">
          <img src={footer3.imgUrl[0].imgUrl1} alt="" />
          <img src={footer3.imgUrl[0].imgUrl2} alt="" />
          <img src={footer3.imgUrl[0].imgUrl3} alt="" />
        </div>

        <div className="logo-f3">
          <img src={footer3.imgUrl[0].imgUrl4} alt="" />
        </div>
      </div>
      <div className="blur3 blur-f-1"></div>
      <div className="blur3 blur-f-2"></div>
    </div>
  );
};

export default Footer3;
