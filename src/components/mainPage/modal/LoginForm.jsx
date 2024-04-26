import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequested } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = ({ toggleForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignInClick = async () => {
    try {
      const response = await axios.post('https://zweb.up.railway.app/user/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const userData = response.data.user;
        console.log(userData);
        dispatch(loginRequested(userData));
        navigate("/designs");

        setEmail("");
        setPassword("");
        setError("");
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 500) {
          setError('Internal server error. Please try again later.');
        } else {
          setError('An error occurred. Please try again later.');
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from the server. Please check your internet connection.');
      } else {
        // Something happened in setting up the request that triggered an error
        setError('An error occurred. Please try again later.');
      }
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <div className="modal-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="message-error">{error}</div>
        <button className="form-button" onClick={handleSignInClick}>
          Login
        </button>
        <div className="sub-button">
          <span> Don't have an account? </span>
          <button onClick={toggleForm}>Create Account</button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
