/* eslint-disable import/first */
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

const trialDesignComponents = Array.from({ length: 18 }, (_, i) => require(`./pages/TrialDesign${i + 1}`).default);
// eslint-disable-next-line import/first
import TrialDesign1 from "./pages/TrialDesign1";
import TrialDesign2 from "./pages/TrialDesign2";
import TrialDesign3 from "./pages/TrialDesign3";
import TrialDesign4 from "./pages/TrialDesign4";
import TrialDesign5 from "./pages/TrialDesign5";
import TrialDesign6 from "./pages/TrialDesign6";
import TrialDesign7 from "./pages/TrialDesign7"; // Adjusted line
import TrialDesign10 from "./pages/TrialDesign10";
import TrialDesign14 from "./pages/TrialDesign14";
import TrialDesign18 from "./pages/TrialDesign18";


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
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<Dashboard />}>
          <Route path="/trial-design1" element={<TrialDesign1 />} />
          <Route path="/trial-design2" element={<TrialDesign2 />} />
          <Route path="/trial-design3" element={<TrialDesign3 />} />
          <Route path="/trial-design4" element={<TrialDesign4 />} />
          <Route path="/trial-design5" element={<TrialDesign5 />} />
          <Route path="/trial-design6" element={<TrialDesign6 />} />
          <Route path="/trial-design7" element={<TrialDesign7 />} /> {/* Adjusted line */}
          <Route path="/trial-design10" element={<TrialDesign10 />} /> 
          <Route path="/trial-design14" element={<TrialDesign14 />} /> 
          <Route path="/trial-design18" element={<TrialDesign18 />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
