import React, { useState } from "react";
import "./modal.css";
import signinPoster from "../../../assets/images/mainPageAssets/proj-05.svg";
import loginPoster from "../../../assets/images/mainPageAssets/proj-01.svg";
import aiformPoster from "../../../assets/images/mainPageAssets/proj-08.svg";
import Confetti from "../congrats/Confetti";

const modalData = {
  signin: {
    poster: signinPoster,
    title: "Sign In",
  },
  login: {
    poster: loginPoster,
    title: "Log In",
  },
  AiForm: {
    poster: aiformPoster,
    title: "Ai-form",
  },
};

const Modal = ({ type }) => {
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
    <div className="overlay">
      <div className="modal">
        {/* <Confetti></Confetti> */}
        {modalType === "sign-in" && (
          <>
            <img src={modalData.signin.poster} alt="Modal Poster" />
            <h2>{modalData.signin.title}</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleTypeSwitch}>{modalType === "sign-in" ? "Switch to Log In" : "Switch to Sign In"}</button>
          </>
        )}

        {modalType === "log-in" && (
          <>
            <img src={modalData.signin.poster} alt="Modal Poster" />
            <h2>{modalData.login.title}</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleTypeSwitch}>{modalType === "sign-in" ? "Switch to Log In" : "Switch to Sign In"}</button>
          </>
        )}

        {modalType === "Ai-form" && (
          <>
            <img src={modalData.signin.poster} alt="Modal Poster" />
            <h2>{modalData.AiForm.title}</h2>
            <button onClick={handleLogIn}>Log In</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
