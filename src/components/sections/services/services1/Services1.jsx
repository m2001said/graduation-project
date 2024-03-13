import React from "react";
import Services1Card from "./services1Card/services1Card";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Services1 = () => {
  // const { services } = useSelector((state) => state.template1);
  const { pathname } = useLocation();
  const services = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.services;
    } else {
      return state.template1.services;
    }
  });
  return (
    <div className="services design-1">
      {services.services.map((service, index) => (
        <Services1Card key={index} image={service.icon} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

export default Services1;
