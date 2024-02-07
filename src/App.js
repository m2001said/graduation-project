import React from "react";
import { Route, Routes } from "react-router";
import MainNav from "./components/mainPage/mainNavbar/MainNav";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import DesignsPage from "./pages/DesignsPage";
import TrialDesign1 from "./pages/TrialDesign1";
import TrialDesign2 from "./pages/TrialDesign2";
import TrialDesign3 from "./pages/TrialDesign3";
import TrialDesign4 from "./pages/TrialDesign4";
import TrialDesign5 from "./pages/TrialDesign5";
import TrialDesign6 from "./pages/TrialDesign6";
import BuildYourPage from "./pages/BuildYourPage";
import NotFound from "./pages/NotFoundPage";
import posterImage from "./assets/images/mainPageAssets/signin.svg";
import BaseModal from "./components/mainPage/modal/BaseModal/BaseModal.jsx";
import SigninLogin from "./components/mainPage/modal/SigninLogin.jsx";

const trialDesignComponents = [TrialDesign1, TrialDesign2, TrialDesign3, TrialDesign4, TrialDesign5, TrialDesign6];

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
