import React from "react";
import Header from "../components/mainPage/header/Header.jsx";
import Steps from "../components/mainPage/stepsGuide/StepsGuide.jsx";
import Modal from "../components/mainPage/modal/Modal.jsx";
import posterImage from "../assets/images/mainPageAssets/hero.svg";

const MainPage = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Steps /> */}
      <Modal type={"sign-in"} posterImage={posterImage} />
    </>
  );
};
export default MainPage;
