import React from "react";
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

const trialDesignComponents = Array.from({length: 7}, (_, i) => require(`./pages/TrialDesign${i+1}`).default);

function App() {
  
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const signIn = () => {
    setIsSignedIn(true);
  };
  const signOut = () => {
    setIsSignedIn(false);
  };


  return (
    <>
      <MainNav loginState={isSignedIn} setSignOUT={signOut} />
      <BaseModal poster={posterImage}>
        <SigninLogin setIsSignedIn={signIn} />
      </BaseModal>
      <Routes>
        <Route path="/" element={<MainPage isSignedIn={isSignedIn} signIn={signIn} />} />
        <Route path="/Designs" element={<DesignsPage />} />
        <Route path="/PageCraft" element={<BuildYourPage />} />
        {trialDesignComponents.map((Component, index) => (
          <Route path={`/preview-trial-design${index + 1}`} element={<Component />} />
        ))}
        <Route element={<Dashboard />}>
          {trialDesignComponents.map((Component, index) => (
            <Route path={`/build-trial-design${index + 1}`} element={<Component />} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
