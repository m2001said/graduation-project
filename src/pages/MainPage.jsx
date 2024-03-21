import React from "react";
import Header from "../components/mainPage/header/Header.jsx";
import Steps from "../components/mainPage/stepsGuide/StepsGuide.jsx";
import DemoVideo from "../components/mainPage/demoVideo/DemoVideo.jsx";
import posterImage from "../assets/images/mainPageAssets/signin.svg";
import BaseModal from "../components/mainPage/modal/BaseModal/BaseModal.jsx";
import SigninLogin from "../components/mainPage/modal/SigninLogin.jsx";


const MainPage = ({ toggleModal ,isModalOpen,signIn}) => {

  return (
    <>
      {isModalOpen ? (
        <BaseModal poster={posterImage} toggleModal={toggleModal}>
          <SigninLogin setIsSignedIn={signIn} toggleModal={toggleModal} />
        </BaseModal>
      ) : null}      
      <Header toggleModal={toggleModal}></Header>
      <Steps></Steps>
      <DemoVideo></DemoVideo>
    </>
  );
};

export default MainPage;
