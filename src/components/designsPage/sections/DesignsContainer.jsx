import React from "react";
import "./designsContainer.css";
import DesignCard from "./designsCard/DesignCard";
import design6 from "../../../assets/images/designs/design6.png";
import design3 from "../../../assets/images/designs/design3.png";

const DesignsData = [
  {
    title: "Start From Scratch",
    description: " Craft a page that reflects your professionalism",
    imageUrl: "https://via.placeholder.com/300x280/eee/777?text=Blank",
  },
  {
    title: "DesignTitle1",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145474/tnxikx0i27syq6uzsav6.png",
  },
  {
    title: "DesignTitle2",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145450/design2.png",
  },
  {
    title: "DesignTitle3",
    description: " Design description Design description ",
    imageUrl: design3,
  },
  {
    title: "DesignTitle4",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145472/design4.png",
  },
  {
    title: "DesignTitle5",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145463/design5.png",
  },
  {
    title: "DesignTitle6",
    description: " Design description Design description ",
    imageUrl: design6,
  },
  {
    title: "DesignTitle7",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145448/design7.jpg",
  },
  {
    title: "DesignTitle8",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145450/design8.png",
  },
  {
    title: "DesignTitle9",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "DesignTitle10",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145436/design10.jpg",
  },
  {
    title: "DesignTitle11",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145439/design11.png",
  },
  {
    title: "DesignTitle12",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "DesignTitle13",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "DesignTitle14",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145457/design14.png",
  },
  {
    title: "DesignTitle15",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "DesignTitle16",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145480/sclyoscpjmei8sdnevi3.png",
  },
  {
    title: "DesignTitle17",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "DesignTitle18",
    description: " Design description Design description ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145438/design18.png",
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
              <DesignCard key={index} Designdata={design} index={index}></DesignCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignsContainer;
