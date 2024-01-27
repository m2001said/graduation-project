import React from "react";
import "./stepsGuide.css";

const stepsData = [
    {
      title: 'Sign In',
      description: 'To get started, sign in to create your free website page. Your page is accessible anytime, allowing you to make modifications and deploy updates whenever you like.',
    },
    {
      title: 'Choose Your Design',
      description: 'Tailor your website with two design options:',
      subSteps: [
        'Blank Page: Begin with a blank canvas, selecting sections from our diverse range of designs.',
        'AI-Generated: Pick a design, and let our AI generate text and suitable images for you.',
      ],
    },
    {
      title: 'Revise Your Content',
      description: 'Fine-tune your text, make any necessary changes, then save your work and deploy it.',
    },
    {
      title: 'Update Your Data',
      description: 'Freely deploy your website and share it with friends. Log in anytime to update text and redeploy as needed. Enjoy the flexibility of making changes whenever you want.',
    },
  ];

const Steps = () => {
  return (
    <div className="steps"></div>
  );
};
export default Steps;
