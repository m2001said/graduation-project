import React from "react";
import Header from "../components/mainPage/header/Header.jsx";
import Steps from "../components/mainPage/stepsGuide/StepsGuide.jsx";
import MainNav from "../components/mainPage/mainNavbar/MainNav.jsx";

const MainPage = () => {
  return (
    <>
      <MainNav></MainNav>
      <Header></Header>
      <Steps></Steps>
    </>
  );
};

export default MainPage;
