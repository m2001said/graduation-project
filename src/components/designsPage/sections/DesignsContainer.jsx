import React from "react";
import "./designsContainer.css";
import DesignCard from "./designsCard/DesignCard";
import design1 from "../../../assets/images/designs/design1.jpg";
import design2 from "../../../assets/images/designs/design2.jpg";
import design3 from "../../../assets/images/designs/design3.jpg";
import design4 from "../../../assets/images/designs/design4.jpg";
import design5 from "../../../assets/images/designs/design5.jpg";
import design6 from "../../../assets/images/designs/design6.jpg";
import design7 from "../../../assets/images/designs/design7.jpg";
import design8 from "../../../assets/images/designs/design8.jpg";
import design9 from "../../../assets/images/designs/design9.jpg";
import design10 from "../../../assets/images/designs/design10.jpg";
import design11 from "../../../assets/images/designs/design11.jpg";
import design13 from "../../../assets/images/designs/design13.jpg";
import design14 from "../../../assets/images/designs/design14.jpg";
import design16 from "../../../assets/images/designs/design16.jpg";
import design18 from "../../../assets/images/designs/design18.jpg";
import websites from "../../../assets/images/websites.jpg";

const DesignsData = [
  {
    title: "Your Websites",
    description: "Discover the incredible websites you've created.",
    imageUrl: websites,
  },
  {
    title: "Start From Scratch",
    description: " Craft a page that reflects your professionalism",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709490323/create-with-you-self.jpg",
  },
  {
    title: "Unique Homes",
    description: " Explore diverse design and project updates for personalized living. ",
    imageUrl: design1,
  },
  {
    title: "Web Dev Protofolio",
    description: " Showcase your web dev skills and impressive projects in one place. ",
    imageUrl: design2,
  },
  {
    title: "FitClub Pro",
    description: " Shape your ideal body with expert coaches, diverse programs. ",
    imageUrl: design3,
  },
  {
    title: "Home Finder Pro",
    description: " Find your dream home among 9000+ options with 2000+ happy customers. ",
    imageUrl: design4,
  },
  {
    title: "Memorable Journeys",
    description: " Explore travel tips, assistance, and create lasting global memories. ",
    imageUrl: design5,
  },
  {
    title: "Chef Food",
    description: " Discover diverse flavors with our menu and satisfied testimonials. ",
    imageUrl: design6,
  },
  {
    title: "Secure Money Solutions",
    description: " Discover Hoobank - Your secure and efficient next-gen payment solution. ",
    imageUrl: design7,
  },
  {
    title: "Protofolio Hub",
    description: " Experience frontend and captivating UI/UX designs in our portfolio. ",
    imageUrl: design8,
  },
  {
    title: "HomeHub",
    description: " Discover your dream home in an immersive and user-friendly e-commerce platform. ",
    imageUrl: design9,
  },
  {
    title: "Bookstore Bliss",
    description: " Explore top books, reviews, and a virtual library experience. ",
    imageUrl: design10,
  },
  {
    title: "Digital Portfolio Showcase",
    description: " Explore Bolby Doe's impressive web design and development portfolio. ",
    imageUrl: design11,
  },
  {
    title: "Nike Ecommerce",
    description: " Innovative Nike e-commerce for a stylish and seamless shopping experience. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "Architecture Showcase",
    description: " Innovative portfolio highlighting architectural expertise and diverse, creative projects. ",
    imageUrl: design13,
  },
  {
    title: "Gadget Store Hub",
    description: " Explore our curated collection of headphones, laptops in our store. ",
    imageUrl: design14,
  },
  {
    title: "Developer Portfolio",
    description: " Explore innovative app development with our software developer portfolio. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "Coffero's Café",
    description: " Savor the essence of coffee at our store. Check our menu, book a table. ",
    imageUrl: design16,
  },
  {
    title: "Personal Portfolio",
    description: " Dynamic web portfolio emphasizing frontend and UI/UX design expertise. ",
    imageUrl: "https://res.cloudinary.com/dvp3nyulf/image/upload/v1709147870/under-work.jpg",
  },
  {
    title: "DriveWise Autos",
    description: " Choose us for the best prices, fast and secure, and skilled drivers. ",
    imageUrl: design18,
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
