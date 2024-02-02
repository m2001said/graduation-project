import React from "react";
import "./designsContainer.css";
import DesignCard from "./designsCard/DesignCard";
import design2 from "../../../assets/images/designs/design2.png";
import design3 from "../../../assets/images/designs/design3.png";

const DesignsData = [
  {
    title: "DesignTitle",
    description: " Design description Design description ",
    imageUrl: design2,
  },
  {
    title: "DesignTitle",
    description: " Design description Design description ",
    imageUrl: design3,
  },
];

const DesignsContainer = () => {
  return (
    <>
      <div className="designs-section">
        <div className="container mx-auto px-4  py-4">
          <h1 className="text-3xl font-bold tracking-tighter mb-4 text-center text-white sm:text-4xl md:text-5xl lg:text-6xl/none">Our Designs</h1>
          <p className="text-gray-400 text-center">Explore our latest and greatest designs.</p>
          <div className="designs-container mt-8 flex flex-wrap gap-4">
            {DesignsData.map((design) => (
              <DesignCard Designdata={design}></DesignCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignsContainer;
