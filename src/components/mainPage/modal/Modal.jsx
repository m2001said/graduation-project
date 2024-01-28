import React, { useState } from "react";

const Modal = ({ type, posterImage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalType, setModalType] = useState(type);

  const handleSignIn = () => {
    console.log(username);
  };

  const handleLogIn = () => {
    console.log(username);
  };

  const handleTypeSwitch = () => {
    setModalType(modalType === "sign-in" ? "log-in" : "sign-in");
  };

  return (
    <div className="modal">
      <img src={posterImage} alt="Modal Poster" />

      {modalType === "sign-in" && (
        <>
          <h2>Sign In</h2>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleTypeSwitch}>{modalType === "sign-in" ? "Switch to Log In" : "Switch to Sign In"}</button>
        </>
      )}

      {modalType === "log-in" && (
        <>
          <h2>Log In</h2>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogIn}>Log In</button>
          <button onClick={handleTypeSwitch}>{modalType === "sign-in" ? "Switch to Log In" : "Switch to Sign In"}</button>
        </>
      )}

      {modalType === "Ai-form" && (
        <>
          <h2>AI Form</h2>
          <button onClick={handleLogIn}>Log In</button>
        </>
      )}
    </div>
  );
};

export default Modal;
