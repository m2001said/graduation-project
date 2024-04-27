import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAsync } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ toggleForm ,toggleModal}) => {
  const Navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignInClick = async () => {
    dispatch(loginUserAsync({ email, password }));
    toggleModal();
    Navigate('/designs');
  };


  return (
    <>
      <h1>Login</h1>
      <div className="modal-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="message-error">error</div>
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
