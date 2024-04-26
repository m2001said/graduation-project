import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAsync } from '../../../features/auth/authSlice';
import { validate } from './validationUtils';

const SignUpForm = ({ toggleForm }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const handleSignUp = async () => {
    const validationError = validate(name, email, password);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }
    dispatch(registerUserAsync({ name, email, password }));
  };


  return (
    <>
      {status === 'succeeded' ? (
        <div className="verification-message">
          <h1>Verify Your Email</h1>
          <p>Please check your email inbox to verify your email address before logging in.</p>
          <div className="sub-button text-center">
            <span> Already have an account? </span>
            <button onClick={toggleForm}>Login</button>
          </div>
        </div>
      ) : (
        <>
          <h1>Create Account</h1>
          <div className="modal-form">
            <label htmlFor="newName">Name</label>
            <input type="text" id="newName" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="newEmail">Email</label>
            <input type="email" id="newEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="newPassword">Password</label>
            <input type="password" id="newPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="message-error">hhg</div>
            {errorMessage && <p className="message-error">{errorMessage}</p>}

            <button className="form-button" onClick={handleSignUp}>
              Create Account
            </button>
            <div className="sub-button">
              <span> Already have an account? </span>
              <button onClick={toggleForm}>Login</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUpForm;
