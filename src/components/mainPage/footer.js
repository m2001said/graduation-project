
// import React from 'react';
// // import './styles.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <button className="button" id='a1'>With Your Self</button>
//       {/* <button className="button" id="a2">With AI</button> */}
//       <button className="button" id="a2" style={{ marginLeft: '330px' }}>With AI</button>
//     </footer>
//   );
// };

// export default Footer;
// Footer.js

// // import React, { useState } from 'react';
// // import Modal from '../components/modle1.jsx'; // Import the Modal component
// // import '../components/modle1.css';
// // import React, { useState } from 'react';
// // import './modle1.css'; // Adjust the path accordingly
// // import './styles.css';
// // const Footer = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   const openModal = () => {
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <footer className="footer">
// //       <button className="button" id='a1'>With Your Self</button>
// //       <button className="button" id="a2" onClick={openModal}>With AI</button>

// //       {/* Render the Modal if isModalOpen is true */}
// //       {isModalOpen && <Modal onClose={closeModal} />}
// //     </footer>
// //   );
// // };

// // export default Footer;









// // import React, { useState } from 'react';
// // import Modle1 from './modle1.jsx'; // Adjust the path accordingly
// // import './modle1.css'; // Adjust the path accordingly
// // import './styles.css';

// // const Footer = () => {
// //   // ...
// // };

// // export default Footer;

import React, { useState } from 'react';
import ModalPage from './modalPage'; // Adjust the path accordingly

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

      {/* Render the ModalPage if isModalOpen is true */}
      {isModalOpen && <ModalPage onClose={closeModal} />}
    </footer>
  );
};

export default Footer;
