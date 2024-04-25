import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
  const { token } = useParams();
  const [verificationMessage, setVerificationMessage] = useState("Verifying email...");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`https://zweb.up.railway.app/user/verify/${token}`);
        if (response.status === 200) {
          setVerificationMessage('Your email has been verified. Welcome to our platform!');
        }
      } catch (error) {
        console.error('Error verifying email:', error);
        setVerificationMessage('An error occurred while verifying your email. Please try again later.');
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div>
      <h1>Email Verification</h1>
      <p>{verificationMessage}</p>
    </div>
  );
};

export default VerifyEmail;
