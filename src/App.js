import React, { useState } from "react";
import { Route, Routes } from "react-router";
import MainNav from "./components/mainPage/mainNavbar/MainNav";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import DesignsPage from "./pages/DesignsPage";
import BuildYourPage from "./pages/BuildYourPage";
import NotFound from "./pages/NotFoundPage";
import OwnPage from "./pages/OwnPage.jsx";
import YourWebsites from "./pages/YourWebsites.jsx";
import ProtectedRoute from "./pages/ProtectedRoute";
import { useRightToLeft } from "./utils/rightToLeft.js";

const trialDesignComponents = Array.from({ length: 18 }, (_, i) => require(`./pages/TrialDesign${i + 1}`).default);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isRightToLeft = useRightToLeft();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  //   todo : should we make all routes dynamic , ar/designs , en/designs ? or not , if yes we must add functionality for all links
  return (
    <div className={isRightToLeft ? "rtl" : "ltr"}>
      <MainNav toggleModal={toggleModal} />
      <div style={{ marginTop: "77px" }}>
        <Routes>
          <Route path="/" element={<MainPage toggleModal={toggleModal} isModalOpen={isModalOpen} />} />
          <Route
            path="/designs"
            element={
              <ProtectedRoute>
                <DesignsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/websites" element={<YourWebsites />} />
          <Route
            path="/page-craft"
            element={
              <ProtectedRoute>
                <BuildYourPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/own-page"
            element={
              <ProtectedRoute>
                <OwnPage />
              </ProtectedRoute>
            }
          />

          {trialDesignComponents.map((Component, index) => (
            <Route
              key={`preview-trial-design${index}`}
              path={`/preview-trial-design${index + 1}`}
              element={
                <ProtectedRoute>
                  <Component />
                </ProtectedRoute>
              }
            />
          ))}
          <Route element={<Dashboard />}>
            {trialDesignComponents.map((Component, index) => (
              <Route key={`build-trial-design${index}`} path={`/build-trial-design${index + 1}/:pageId`} element={<Component />} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
