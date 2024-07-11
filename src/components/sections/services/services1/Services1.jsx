import React from "react";
import Services1Card from "./services1Card/services1Card";
import { useSelector } from "react-redux";
const Services1 = ({ template }) => {
  const ownServices = useSelector((state) => state.ownTemplate.services);
  const services = template ? template.services : ownServices;
  return (
    <div className="services design-1" id={services.sectionId}>
      {services.services.map((service, index) => (
        <Services1Card key={index} imgUrl={service.icon} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

export default Services1;
