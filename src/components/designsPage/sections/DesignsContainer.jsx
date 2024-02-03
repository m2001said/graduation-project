import React from "react";
import "./designsContainer.css";
import DesignCard from "./designsCard/DesignCard";
import design6 from "../../../assets/images/designs/design6.png";
import design3 from "../../../assets/images/designs/design3.png";

const DesignsData = [
  {
    title: "DesignTitle1",
    description: " Design description Design description ",
    imageUrl: design3,
  },
  {
    title: "DesignTitle2",
    description: " Design description Design description ",
    imageUrl: design3,
  },
  {
    title: "DesignTitle3",
    description: " Design description Design description ",
    imageUrl: design3,
  },
  {
    title: "DesignTitle4",
    description: " Design description Design description ",
    imageUrl: design3,
  },
  {
    title: "DesignTitle5",
    description: " Design description Design description ",
    imageUrl: design3,
  },
  {
    title: "DesignTitle6",
    description: " Design description Design description ",
    imageUrl: design6,
  },
];

const DesignsContainer = () => {
  return (
    <>
      <div className="designs-section">
        <div className="container mx-auto px-4  py-4">
          <h1 className="text-3xl font-bold tracking-tighter mb-4 text-center text-white sm:text-4xl md:text-5xl lg:text-6xl/none">Our Designs</h1>
          <p className="text-gray-400 text-center">Explore our latest and greatest designs.</p>
          <div className="designs-container mt-8 flex flex-wrap gap-4 justify-center">
            {DesignsData.map((design, index) => (
              <DesignCard Designdata={design} index={index + 1}></DesignCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignsContainer;
