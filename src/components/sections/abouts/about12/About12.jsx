import React from "react";
import "./about12.css";

const About12 = ({ template }) => {
  const about = template.about;

  return (
    <div className="about12 container12" id={about.sectionId}>
      <div className="about-left12">
        <img src={about.imgUrl} alt="about-image" className="about-img12" />
      </div>
      <div className="about-right12">
        <h3>{about.title}</h3>
        <h2>{about.subtitle}</h2>
        {about.description.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default About12;
