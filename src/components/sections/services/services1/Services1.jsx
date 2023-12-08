import React from "react";
import Groupwork from "../../../../images/Groupwork.svg";
import Iocn from "../../../../images/Iocn.svg";
import Vector from "../../../../images/Vector.svg";
import Services1Card from "./services1Card/services1Card";
import { useSelector } from "react-redux";

const Services1 = () => {
  const { services } = useSelector((state) => state.template);
  return (
    <div className="services design-1">
      <Services1Card image={services.blocks[0].icon} title={services.blocks[0].title} description={services.blocks[0].description} />
      <Services1Card image={services.blocks[1].icon} title={services.blocks[1].title} description={services.blocks[1].description} />
      <Services1Card image={services.blocks[2].icon} title={services.blocks[2].title} description={services.blocks[2].description} />
    </div>
  );
};

export default Services1;
