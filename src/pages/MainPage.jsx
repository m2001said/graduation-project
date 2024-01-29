import React from "react";
import Header from "../components/mainPage/header/Header.jsx";
import Steps from "../components/mainPage/stepsGuide/StepsGuide.jsx";
import Modal from "../components/mainPage/modal/Modal.jsx";
import posterImage from "../assets/images/mainPageAssets/hero.svg";
import BaseModal from "../components/mainPage/modal/BaseModal/BaseModal.jsx";

const MainPage = () => {
  return (
    <>
      <Header />
      <Steps />
      {/* <Modal type={"sign-in"} posterImage={posterImage} /> */}
      <BaseModal poster={posterImage}>
        <h2>form</h2>
      </BaseModal>
    </>
  );
};
export default MainPage;
