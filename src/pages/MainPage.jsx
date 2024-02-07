import React from "react";
import Header from "../components/mainPage/header/Header.jsx";
import Steps from "../components/mainPage/stepsGuide/StepsGuide.jsx";
import DemoVideo from "../components/mainPage/demoVideo/DemoVideo.jsx";
const MainPage = ({isSignedIn,signIn}) => {

  return (
    <>
      <Header loginState={isSignedIn}></Header>
      <Steps></Steps>
      <DemoVideo></DemoVideo>
    </>
  );
};

export default MainPage;
