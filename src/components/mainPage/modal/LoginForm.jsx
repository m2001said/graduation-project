import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAsync } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import spinner from '../../../assets/images/spinner.svg';

const LoginForm = ({ toggleForm, toggleModal }) => {
  const navigate = useNavigate(); // Changed from Navigate to navigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const handleSignInClick = async () => {
    try {
      await dispatch(loginUserAsync({ email, password }));
      toggleModal();
      navigate('/designs');
    } catch (error) {
      console.error('Login failed:', error);
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
        <div className="message-error"></div>
        <button className={`form-button ${status === 'loading' ? 'flex gap-8' : ''}`} onClick={handleSignInClick} disabled={status === 'loading'}>
          Login
          {status === 'loading' && (
            <img src={spinner} alt="Loading" className="loading animate-spin-slow w-20" />
          )}
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
