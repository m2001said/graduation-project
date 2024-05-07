import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAsync } from '../../../features/auth/authSlice';
import { validate } from './validationUtils';
import spinner from '../../../assets/images/spinner.svg';
import Verified from './Verified';
import { useEffect } from 'react';

const SignUpForm = ({ toggleForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [createSuccess, setCreateSuccess] = useState(false);

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const handleSignUp = async () => {
    const validationError = validate(name, email, password);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }
    await dispatch(registerUserAsync({ name, email, password }));
    setCreateSuccess(true);
  };

  // Clear form fields when createSuccess changes
  useEffect(() => {
    if (createSuccess) {
      setName('');
      setEmail('');
      setPassword('');
    }
  }, [createSuccess]);

  return (
    <>
      {createSuccess ? (
      <Verified toggleForm={toggleForm} />

      ) : (
        <>
          <h1>Create Account</h1>
          <div className="modal-form">
            <label htmlFor="newName">Name</label>
            <input
              type="text"
              id="newName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="newEmail">Email</label>
            <input
              type="email"
              id="newEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="newPassword">Password</label>
            <input
              type="password"
              id="newPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="message-error"></div>
            {errorMessage && <p className="message-error">{errorMessage}</p>}

            <button
              className={`form-button`}
              onClick={handleSignUp}
              disabled={status === 'loading'}
            >
              Create Account
              {status === 'loading' && (
                <img
                  src={spinner}
                  alt="Loading"
                  className="loading animate-spin-slow "
                />
              )}
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

