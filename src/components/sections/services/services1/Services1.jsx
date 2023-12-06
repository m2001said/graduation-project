import React from "react";
import Groupwork from "../../../../images/Groupwork.svg";
import Iocn from "../../../../images/Iocn.svg";
import Vector from "../../../../images/Vector.svg";
import Services1Card from "./services1Card/services1Card";

const Services1 = () => {
  return (
    <div className="services design-1">
      <Services1Card image={Vector} title="Project Plan" description="There are many variations of the passages of lorem Ipsum from available, majority" />
      <Services1Card image={Groupwork} title="Interior Work" description="There are many variations of the passages of lorem Ipsum from available, majority" />
      <Services1Card image={Iocn} title="Realization" description="There are many variations of the passages of lorem Ipsum from available, majority" />
    </div>
  );
};

export default Services1;
