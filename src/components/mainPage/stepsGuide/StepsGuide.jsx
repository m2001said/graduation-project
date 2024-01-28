import React from "react";
import "./stepsGuide.css";
import ai from "../../../assets/images/mainPageAssets/ai.svg";
import signin from "../../../assets/images/mainPageAssets/signin.svg";
import ways from "../../../assets/images/mainPageAssets/ways.svg";
import deploy from "../../../assets/images/mainPageAssets/deploy.svg";

const stepsData = [
  {
    title: "Sign In",
    description: "Start by signing in to create your free website page. Your page is accessible anytime.",
    imageUrl: signin,
  },
  {
    title: "Choose Your Design",
    description: `Tailor your website with two design ,
      Blank Page: Begin with a blank canvas, selecting sections from our diverse range of designs.
      AI-Generated: Pick a design, and let our AI generate text and suitable images for you.`,
    imageUrl: ai,
  },
  {
    title: "Ai generator",
    description: " Select any design you like and let our AI generate the texts and suitable images for you.",
    imageUrl: ways,
  },
  {
    title: "Revise Your Data",
    description: "Revise all your texts, change what you need, then save it and deploy it.",
    imageUrl: deploy,
  },
];

const Steps = () => {
  return (
    <div className="main-steps">
      <div className="container mx-auto px-4 px-6">
        {stepsData.map((item, index) => (
          <div className="step-card flex justify-between">
            <div className="step-info">
              <h1 className="step-title">{item.title}</h1>
              <p className="step-description">{item.description}</p>
            </div>
            <div className="step-img">
              <img src={item.imageUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Steps;
