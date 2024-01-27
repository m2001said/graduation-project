import React from "react";
import "./stepsGuide.css";

const stepsData = [
    {
      title: 'Sign In',
      description: 'Start by signing in to create your free website page. Your page is accessible anytime.',
    },
    {
      title: 'Choose Your Design',
      description: `Tailor your website with two design ,
      Blank Page: Begin with a blank canvas, selecting sections from our diverse range of designs.
      AI-Generated: Pick a design, and let our AI generate text and suitable images for you.`
    },
    {
      title: 'Ai generator',
      description: ' Select any design you like and let our AI generate the texts and suitable images for you.',
      imageUrl:"../../assets/images/mainPageAssets/ai.svg"
    },
    {
      title: 'Revise Your Data',
      description: 'Revise all your texts, change what you need, then save it and deploy it.',
    },
  ];

const Steps = () => {
  return (
    <div className="steps">
      <img src={imageUrl} alt="" />
    </div>
  );
};
export default Steps;
