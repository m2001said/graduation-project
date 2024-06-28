import React from "react";
import Services1Card from "./services1Card/services1Card";
const Services1 = ({template}) => {
  return (
    <div className="services design-1">
      {template.services.services.map((service, index) => (
        <Services1Card key={index} imgUrl={service.icon} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

export default Services1;
