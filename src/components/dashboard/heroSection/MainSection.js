import React, { useState } from 'react';
import '../styles/index.css';
import '../heroSection/modals/modalPage.css';
import ModalPage from '../heroSection/modals/modalPage.jsx';
import myImage from '../../../assets/images/img1.webp';
import '../heroSection/modals/modalPage.jsx'; 

const Section = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section className="section">
        <div className="section-content">
          <img src={myImage} alt="Description" className="section-image" />
          <p>
            Welcome to the website creation platform! Build your<br />
            website easily and quickly using artificial <br />
            intelligence. Or start creating your site yourself with your <br />
            chosen elements. <br />
            Create a stunning website for your company or project <br />
            with simplicity and professionalism. Choose from pre-<br />
            made templates or design a custom layout according to<br />
            your needs. Let creativity breathe life into your new<br />
            website now!
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-content2">
          <h1>Make Your Website</h1>
        </div>
      </section>
      <footer className="footer">
        <button className="button" id="a1">
          With Your Self
        </button>
        <button className="button" id="a2" onClick={openModal}>
          With AI
        </button>
        {isModalOpen && <ModalPage onClose={closeModal} />}
      </footer>
    </>
  );
};
export default Section;


