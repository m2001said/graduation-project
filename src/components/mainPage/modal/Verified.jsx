import React from 'react';
import './verifiedmodel.css';

const Verified = ({ toggleForm }) => {
  return (
    <>
        <div className="verified-icon" >
      <img
        src="https://res.cloudinary.com/duc04fwdb/image/upload/v1708037268/jammal_photos/nme9bdbxqehtul4yzmd7.svg"
        alt="check-icon"
      />
              </div>
        <h1 className="message-success">successfully created</h1>
        <p className="message-info">Please check your email to verify your account before logging in.</p>
        <div className="modal-form">
          <button className={`form-button`} onClick={toggleForm}>Go to Login</button>
        </div>
    </>

  );
};

export default Verified;
