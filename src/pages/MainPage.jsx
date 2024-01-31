import React from "react";
import Header from "../components/mainPage/header/Header.jsx";
import Steps from "../components/mainPage/stepsGuide/StepsGuide.jsx";
import MainNav from "../components/mainPage/mainNavbar/MainNav.jsx";
import posterImage from "../assets/images/mainPageAssets/signin.svg";
import BaseModal from "../components/mainPage/modal/BaseModal/BaseModal.jsx";
import SigninLogin from "../components/mainPage/modal/SigninLogin.jsx";

const MainPage = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const signIn = () => {
    setIsSignedIn(true);
  }
  const signOut = () => {
    setIsSignedIn(false);
  }
  return (
    <>
      <BaseModal poster={posterImage}>
        <SigninLogin setIsSignedIn={signIn} />
      </BaseModal>
      <MainNav loginState={isSignedIn} setSignOUT={signOut}></MainNav>
      <Header></Header>
      <Steps></Steps>
    </>
  );
};

export default MainPage;
