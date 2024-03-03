import React from "react";
import "./designsContainer.css";
import DesignCard from "./designsCard/DesignCard";

const DesignsData = [
  {
    title: "Start From Scratch",
    description: " Craft a page that reflects your professionalism",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709490323/create-with-you-self.jpg",
  },
  {
    title: "Unique Homes",
    description: " Explore diverse design and project updates for personalized living. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145474/tnxikx0i27syq6uzsav6.png",
  },
  {
    title: "Web Dev Protofolio",
    description: " Showcase your web dev skills and impressive projects in one place. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145450/design2.png",
  },
  {
    title: "FitClub Pro",
    description: " Shape your ideal body with expert coaches, diverse programs. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709490797/design3.png",
  },
  {
    title: "Home Finder Pro",
    description: " Find your dream home among 9000+ options with 2000+ happy customers. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145472/design4.png",
  },
  {
    title: "Memorable Journeys",
    description: " Explore travel tips, assistance, and create lasting global memories. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145463/design5.png",
  },
  {
    title: "Chef Food",
    description: " Discover diverse flavors with our menu and satisfied testimonials. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709490708/design6.png",
  },
  {
    title: "Secure Money Solutions",
    description: " Discover Hoobank - Your secure and efficient next-gen payment solution. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145448/design7.jpg",
  },
  {
    title: "Protofolio Hub",
    description: " Experience frontend and captivating UI/UX designs in our portfolio. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145450/design8.png",
  },
  {
    title: "DesignTitle9",
    description: " Design ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "Bookstore Bliss",
    description: " Explore top books, reviews, and a virtual library experience. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145436/design10.jpg",
  },
  {
    title: "Digital Portfolio Showcase",
    description: " Explore Bolby Doe's impressive web design and development portfolio. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145439/design11.png",
  },
  {
    title: "DesignTitle12",
    description: " Design ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "DesignTitle13",
    description: " Design ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "Gadget Store Hub",
    description: " Explore our curated collection of headphones, laptops in our store. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145457/design14.png",
  },
  {
    title: "Developer Portfolio",
    description: " Explore innovative app development with our software developer portfolio. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "Coffero's Café",
    description: " Savor the essence of coffee at our store. Check our menu, book a table. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145480/sclyoscpjmei8sdnevi3.png",
  },
  {
    title: "DesignTitle17",
    description: " Design ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "DriveWise Autos",
    description: " Choose us for the best prices, fast and secure, and skilled drivers. ",
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
