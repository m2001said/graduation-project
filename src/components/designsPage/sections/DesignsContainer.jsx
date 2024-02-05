import React from "react";
import "./designsContainer.css";
import DesignCard from "./designsCard/DesignCard";
import design6 from "../../../assets/images/designs/design6.png";
import design3 from "../../../assets/images/designs/design3.png";

const DesignsData = [
  {
    title: "Start From Scratch",
    description: " Craft a page that reflects your professionalism",
    imageUrl: "https://via.placeholder.com/300x320/222/777?text=Blank",
  },
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
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl text-center">Explore our latest and greatest designs.</p>
          <div className="designs-container flex flex-wrap gap-8 justify-center">
            {DesignsData.map((design, index) => (
              <DesignCard Designdata={design} index={index}></DesignCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignsContainer;
