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
    description: " Explore personalized living with diverse design inspirations and project updates. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145474/tnxikx0i27syq6uzsav6.png",
  },
  {
    title: "Web Dev Protofolio",
    description: " A showcase of your web development skills and impressive project portfolio. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145450/design2.png",
  },
  {
    title: "FitClub Pro",
    description: " Shape your ideal body with expert coaches, diverse programs. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709490797/design3.png",
  },
  {
    title: "Home Finder Pro",
    description: " Easily find your dream residence with 9000+ choices, and 2000+ satisfied customers. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145472/design4.png",
  },
  {
    title: "Memorable Journeys",
    description: " Discover travel tips, assistance, and create lasting memories around the world. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145463/design5.png",
  },
  {
    title: "Chef Food",
    description: " Explore a world of taste with our popular food menu and satisfied customer testimonials. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709490708/design6.png",
  },
  {
    title: "Secure Money Solutions",
    description: " Explore the next-gen payment method with Hoobank - Secure, Reliable, and Efficient. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145448/design7.jpg",
  },
  {
    title: "Protofolio Hub",
    description: " Witness the synergy of frontend development and captivating UI/UX designs in our portfolio. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145450/design8.png",
  },
  {
    title: "DesignTitle9",
    description: " Design ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "Bookstore Bliss",
    description: " Discover top-rated books, customer testimonials, and a library at your fingertips. ",
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
    description: " Explore our curated collection of headphones, laptops, and gadgets in our store. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145457/design14.png",
  },
  {
    title: "Apps Developer Portfolio",
    description: " Explore innovative app development with our software developer portfolio. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "Coffero's Café Delights",
    description: " Savor the essence of coffee at our store. Check our menu, book a table. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709145480/sclyoscpjmei8sdnevi3.png",
  },
  {
    title: "DesignTitle17",
    description: " Design ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "AutoSelect Hub",
    description: " Choose us for the best prices, fast and secure transactions, and skilled drivers. ",
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
