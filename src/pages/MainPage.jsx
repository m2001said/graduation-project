import React from "react";
import Header from "../components/mainPage/header/Header.jsx";
import Steps from "../components/mainPage/stepsGuide/StepsGuide.jsx";
import DemoVideo from "../components/mainPage/demoVideo/DemoVideo.jsx";
import posterImage from "../assets/images/mainPageAssets/signin.svg";
import BaseModal from "../components/mainPage/modal/BaseModal/BaseModal.jsx";
import SigninLoginToggle from "../components/mainPage/modal/SigninLoginToggle.jsx";
import PricingPlans from "../components/mainPage/pricingPlans/PricingPlans.jsx"
import ContactForm from "../components/mainPage/ContactForm/ContactForm.jsx"
const MainPage = ({ toggleModal ,isModalOpen}) => {

  return (
    <>
      {isModalOpen ? (
        <BaseModal poster={posterImage} toggleModal={toggleModal}>
          <SigninLoginToggle toggleModal={toggleModal} />
        </BaseModal>
      ) : null}      
      <Header toggleModal={toggleModal}></Header>
      <Steps></Steps>
      <DemoVideo></DemoVideo>
      <ContactForm></ContactForm>
      <PricingPlans></PricingPlans>
    </>
  );
};

export default MainPage;
