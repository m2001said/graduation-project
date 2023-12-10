import React from "react";
import Services1Card from "./services1Card/services1Card";
import { useSelector } from "react-redux";

const Services1 = () => {
  const { services } = useSelector((state) => state.template);

  return (
    <div className="services design-1">
      {services.blocks.map((service, index) => (
        <Services1Card key={index} image={service.icon} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

export default Services1;
