import React from "react";
import "../feedback7/feedback7.css";

const FeedbackCard = ({ title, name, description, imgUrl }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="clip-path">
      <div className="clip-path-container1" style={{ backgroundColor: "var(--website-7-color-5)" }}></div>
      <div className="clip-path-container1" style={{ backgroundColor: "var(--website-7-color-5)" }}></div>
    </div>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-[var(--website-7-color-6)] my-10">{description}</p>
    <div className="flex flex-row">
      <img src={imgUrl} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-[var(--website-7-color-6)]">{name}</h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-[var(--website-7-color-6)]">{title}</p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
