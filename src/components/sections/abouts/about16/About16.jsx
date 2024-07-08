import React from "react";
import "./about16.css";

const About16 = ({ template }) => {
  const about = template.about;

  return (
    <section className="about16 section16" id={about.sectionId}>
      <div className="about__grid16 container16 grid16">
        <div className="about__img-wrapper16">
          <img src={about.imgUrl} alt="" className="about__image16" />
        </div>
        <div className="about__content16">
          <h2 className="section__title16 title-left16" data-title={about.title}>
            {about.title}
          </h2>
          <p className="about__description16">{about.description}</p>
          <div className="about__details16 grid16">
            {about.details.map((detail, index) => (
              <p key={index} className="about__details-description16">
                &#x2713; {detail}
              </p>
            ))}
          </div>

          <a href={about.buttonText} className="btn16">
            {about.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About16;
