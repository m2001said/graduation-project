import React from "react";
import "./stepsGuide.css";

const stepsData = [
    {
      title: 'Sign In',
      description: 'Start by signing in to create your free website page. Your page is accessible anytime.',
      imageUrl:"../../assets/images/mainPageAssets/ai.svg"
    },
    {
      title: 'Choose Your Design',
      description: `Tailor your website with two design ,
      Blank Page: Begin with a blank canvas, selecting sections from our diverse range of designs.
      AI-Generated: Pick a design, and let our AI generate text and suitable images for you.`,
      imageUrl:"../../assets/images/mainPageAssets/ai.svg"
    },
    {
      title: 'Ai generator',
      description: ' Select any design you like and let our AI generate the texts and suitable images for you.',
      imageUrl:"../../assets/images/mainPageAssets/ai.svg"
    },
    {
      title: 'Revise Your Data',
      description: 'Revise all your texts, change what you need, then save it and deploy it.',
      imageUrl:"../../assets/images/mainPageAssets/ai.svg"
    },
  ];

const Steps = () => {
  return (
    <div className="main-steps">
      {stepsData.map((item, index) => (
        <div className="step-card">
          <h1 className="step-title">{ item.title}</h1>
          <p className="step-description">{ item.description}</p>
          <div className="step-img">
            <img src={item.imageUrl} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Steps;
