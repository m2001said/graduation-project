import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router";
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
import { useTranslation } from "react-i18next";

const trialDesignComponents = Array.from({ length: 18 }, (_, i) => require(`./pages/TrialDesign${i + 1}`).default);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isRightToLeft = useRightToLeft();
  const { i18n } = useTranslation();
  const language = i18n.language;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect root URL to the current language
    if (location.pathname === "/") {
      navigate(`/${language}`);
    }
  }, [language, location.pathname, navigate]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={isRightToLeft ? "rtl" : "ltr"}>
      <MainNav toggleModal={toggleModal} />
      <div style={{ marginTop: "77px" }}>
        <Routes>
          <Route path={`/${language}`} element={<MainPage toggleModal={toggleModal} isModalOpen={isModalOpen} />} />
          <Route
            path={`/${language}/designs`}
            element={
              <ProtectedRoute>
                <DesignsPage />
              </ProtectedRoute>
            }
          />
          <Route path={`/${language}/websites`} element={<YourWebsites />} />
          <Route
            path={`/${language}/page-craft`}
            element={
              <ProtectedRoute>
                <BuildYourPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/${language}/own-page`}
            element={
              <ProtectedRoute>
                <OwnPage />
              </ProtectedRoute>
            }
          />

          {trialDesignComponents.map((Component, index) => (
            <Route
              key={`preview-trial-design${index}`}
              path={`/${language}/preview-trial-design${index + 1}`}
              element={
                <ProtectedRoute>
                  <Component />
                </ProtectedRoute>
              }
            />
          ))}
          <Route element={<Dashboard />}>
            {trialDesignComponents.map((Component, index) => (
              <Route key={`build-trial-design${index}`} path={`/${language}/build-trial-design${index + 1}/:pageId`} element={<Component />} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
