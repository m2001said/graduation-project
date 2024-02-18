import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./stepsGuide.css";
import ai from "../../../assets/images/mainPageAssets/ai.svg";
import signin from "../../../assets/images/mainPageAssets/signin.svg";
import ways from "../../../assets/images/mainPageAssets/ways.svg";
import deploy from "../../../assets/images/mainPageAssets/deploy.svg";


const stepsData = [
  {
    title: "Sign In",
    description:
      "To embark on your website creation journey, sign in to unlock the potential of crafting your own personalized web space. This process is your gateway to a free website page that remains at your fingertips.",
    imageUrl: signin,
  },
  {
    title: "Choose Your Design",
    description: `
Personalize your website with two design options. Blank Page: Start from scratch, choosing from our wide array of designs. AI-Generated: Select a design and let our AI create text and appropriate images for you.`,
    imageUrl: ways,
  },
  {
    title: "Ai generator",
    description:
      " Select your preferred design and let our AI do the rest. It will generate relevant text and choose suitable images based on your selection. Our AI ensures the content aligns with your design and purpose. ",
    imageUrl: ai,
  },
  {
    title: "Revise Your Data",
    description:
      "Feel free to review and modify your texts as needed. Once you’re satisfied, save your changes. The revised content is now ready for deployment. Remember, your data is in your control. Make the most of it! ",
    imageUrl: deploy,
  },
];

const Steps = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, 
    }); 
  }, []);
  return (
    <div className="main-steps">
      <div className="container mx-auto px-4 px-6">
        {stepsData.map((item , index) => (
          <div className="step-card flex justify-between" key={index}  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-duration="1000" >
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
