import React, { useState } from "react";
import { Route, Routes } from "react-router";
import MainNav from "./components/mainPage/mainNavbar/MainNav";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import DesignsPage from "./pages/DesignsPage";
import BuildYourPage from "./pages/BuildYourPage";
import NotFound from "./pages/NotFoundPage";
import posterImage from "./assets/images/mainPageAssets/signin.svg";
import BaseModal from "./components/mainPage/modal/BaseModal/BaseModal.jsx";
import SigninLogin from "./components/mainPage/modal/SigninLogin.jsx";
import OwnPage from "./pages/OwnPage.jsx";

const trialDesignComponents = Array.from({ length: 18 }, (_, i) => require(`./pages/TrialDesign${i + 1}`).default);

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const signIn = () => {
    setIsSignedIn(true);
  };
  const signOut = () => {
    setIsSignedIn(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <MainNav loginState={isSignedIn} setSignOUT={signOut} toggleModal={toggleModal} />
      {isModalOpen ? (
        <BaseModal poster={posterImage} toggleModal={toggleModal}>
          <SigninLogin setIsSignedIn={signIn} toggleModal={toggleModal} />
        </BaseModal>
      ) : null}
      <div style={{ marginTop: "77px" }}>
        <Routes>
          <Route path="/" element={<MainPage toggleModal={toggleModal} />} />
          <Route path="/designs" element={<DesignsPage />} />
          <Route path="/page-craft" element={<BuildYourPage />} />
          <Route path="/own-page" element={<OwnPage />} />
          {trialDesignComponents.map((Component, index) => (
            <Route key={`preview-trial-design${index}`} path={`/preview-trial-design${index + 1}`} element={<Component />} />
          ))}
          <Route element={<Dashboard />}>
            {trialDesignComponents.map((Component, index) => (
              <Route key={`build-trial-design${index}`} path={`/build-trial-design${index + 1}`} element={<Component />} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
