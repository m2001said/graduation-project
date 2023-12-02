import React, { useState } from 'react';
import ModalPage from './modalPage'; 

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
   return (
    <footer className="footer">
      <button className="button" id='a1'>With Your Self</button>
      <button className="button" id="a2" onClick={openModal}>With AI</button>
      {isModalOpen && <ModalPage onClose={closeModal} />}
    </footer>
  );
};
export default Footer;
