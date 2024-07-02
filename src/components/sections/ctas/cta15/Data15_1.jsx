import React from "react";
import SingleItem from "./SingleItem";

export const Education = ({ template }) => {
  const cta = template.cta;

  return (
    <div>
      {cta.educations.map((item, index) => (
        <SingleItem key={index} {...item} template={template} />
      ))}
    </div>
  );
};

export const Experience = ({ template }) => {
  const cta = template.cta;

  return (
    <div>
      {cta.experiences.map((item, index) => (
        <SingleItem key={index} {...item} template={template} />
      ))}
    </div>
  );
};
