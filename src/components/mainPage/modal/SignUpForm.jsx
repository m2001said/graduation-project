import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = ({ toggleForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);


  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://zweb.up.railway.app/user', {
        name,
        email,
        password
      });
      if (response.status === 201) {
        setError('User created successfully. Check your email for verification.');
        console.log(response);
        setAccountCreated(true);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Error signing up:', error);
    }
  };

  return (
    <>
      {!accountCreated ? (
        <>
          <h1>Create Account</h1>
          <div className="modal-form">
            <label htmlFor="newName">Name</label>
            <input type="text" id="newName" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="newEmail">Email</label>
            <input type="email" id="newEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="newPassword">Password</label>
            <input type="password" id="newPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="message-error">{error}</div>
            <button className="form-button" onClick={handleSignUp}>
              Create Account
            </button>
            <div className="sub-button">
              <span> Already have an account? </span>
              <button onClick={toggleForm}>Login</button>
            </div>
          </div>
        </>
      ) : (
        <div className="verification-message">
          <h1>Verify Your Email</h1>
          <p>Please check your email inbox to verify your email address before logging in.</p>
          <div className="sub-button text-center">
            <span> Already have an account? </span>
            <button onClick={toggleForm}>Login</button>
          </div>
        </div>
      )}
    </>
  );

};

export default SignUpForm;
