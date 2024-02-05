import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../hero/hero.css";
import ModalPage from "../ui/modals/ModalPage.jsx";
import myImage from "../../../assets/images/img1.webp";
import "../ui/modals/ModalPage.jsx";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const links = [
    { to: "trial-design1", text: "go to TrialDesign1" },
    { to: "trial-design2", text: "go to TrialDesign2" },
    { to: "trial-design3", text: "go to TrialDesign3" },
    { to: "trial-design4", text: "go to TrialDesign4" },
    { to: "trial-design5", text: "go to TrialDesign5" },
    { to: "trial-design6", text: "go to TrialDesign6" },
    { to: "trial-design10", text: "go to TrialDesign10" },
  ];
  return (
    <>
      <section className="sections-image-para">
        <div className="section-content-1">
          <img src={myImage} alt="Description" className="section-content-1-image" />
          <p>
            Welcome to the website creation platform! Build your
            <br />
            website easily and quickly using artificial <br />
            intelligence. Or start creating your site yourself with your <br />
            chosen elements. <br />
            Create a stunning website for your company or project <br />
            with simplicity and professionalism. Choose from pre-
            <br />
            made templates or design a custom layout according to
            <br />
            your needs. Let creativity breathe life into your new
            <br />
            website now!
          </p>
        </div>
      </section>

      <section>
        <div className="section-content-2">
          <h1>Make Your Website</h1>
        </div>
      </section>
      <section className="Buttons">
        <button className="button-1">With Your Self</button>
        <button className="button-2" onClick={openModal}>
          With AI
        </button>
        {isModalOpen && <ModalPage onClose={closeModal} />}
      </section>

      <div className="flex  gap-8 items-center justify-center w-full">
        {links.map((link, index) => (
          <Link key={index} className="temporary-link" to={link.to}>
            {link.text}
          </Link>
        ))}
      </div>
    </>
  );
};
export default Hero;
