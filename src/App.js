import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router";
import MainNav from "./components/mainPage/mainNavbar/MainNav";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import DesignsPage from "./pages/DesignsPage";
import BuildYourPage from "./pages/BuildYourPage";
import NotFound from "./pages/NotFoundPage";
import OwnPage from "./pages/OwnPage.jsx";
import UserInformation from "./pages/UserInformation.jsx";
import ProtectedRoute from "./pages/ProtectedRoute";
import SuccessVerified from "./pages/SuccessVerified.jsx";
import FailedVerified from "./pages/FailedVerified.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

import YourWebsites from "./pages/YourWebsites.jsx";
import Admin from "./pages/Admin";
import { useRightToLeft } from "./utils/rightToLeft.js";
import { useTranslation } from "react-i18next";
import YourPages from "./pages/YourPages.jsx";

const trialDesignComponents = Array.from({ length: 18 }, (_, i) => require(`./pages/TrialDesign${i + 1}`).default);
const websites = Array.from({ length: 18 }, (_, i) => require(`./pages/TrialDesign${i + 1}`).default);

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
      <div style={{ marginTop: "77px" }} id="template-container">
        <Routes>
          <Route path={`/${language}/success-verified`} element={<SuccessVerified />} />
          <Route path={`/${language}/failed-verified`} element={<FailedVerified />} />
          <Route path={`/${language}/reset-password/:token`} element={<ResetPassword />} />

          <Route path={`/${language}`} element={<MainPage toggleModal={toggleModal} isModalOpen={isModalOpen} />} />
          <Route
            path={`/${language}/designs`}
            element={
              <ProtectedRoute>
                <DesignsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={`/${language}/user-information`}
            element={
              <ProtectedRoute>
                <UserInformation />
              </ProtectedRoute>
            }
          />
          <Route path={`/${language}/websites`} element={<YourWebsites />} />

          {/* edit here */}
          <Route path={`/${language}/pages`} element={<YourPages />} />

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
              <Route
                key={`build-trial-design${index}`}
                path={`/${language}/build-trial-design${index + 1}`}
                element={
                  <ProtectedRoute>
                    <Component />
                  </ProtectedRoute>
                }
              />
            ))}
          </Route>

          {/* pages */}
          <Route key={`zweb`} path={`/zweb`} element={<OwnPage />} />
          <Route
            key={`edit-zweb`}
            path={`/edit-zweb`}
            element={
              <ProtectedRoute>
                <OwnPage />
              </ProtectedRoute>
            }
          />

          {/* websites */}
          {websites.map((Component, index) => (
            <Route
              key={`zweb${index}`}
              path={`/zweb${index + 1}`}
              element={
                // <ProtectedRoute>
                <Component />
                // </ProtectedRoute>
              }
            />
          ))}
          <Route element={<Dashboard />}>
            {websites.map((Component, index) => (
              <Route
                key={`edit-zweb${index}`}
                path={`/edit-zweb${index + 1}`}
                element={
                  <ProtectedRoute>
                    <Component />
                  </ProtectedRoute>
                }
              />
            ))}
          </Route>

          <Route path={`/${language}/admin`} element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
