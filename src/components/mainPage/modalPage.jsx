import React from 'react';
import "./modle1.css";
import image from "../../assets/images/img1.png"
const ModalPage = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <img  src={image} alt="Description" className="modal-image" />
          <div className="modal-text">
            <h3>
              
              Create your website quickly with artificial intelligence.
            </h3>
            <div className="input-section">
              <textarea
                placeholder="Enter your text here..."
                style={{ width: '400px', height: '400px' }}/>
                <div>
                <button onClick={onClose}>Build Your Website Now</button>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
