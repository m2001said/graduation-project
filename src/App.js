import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router";
import MainNav from "./components/mainPage/mainNavbar/MainNav";
import Footer from "./components/mainPage/footer/Footer.jsx";
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
import AdminUserPage from "./pages/AdminUserPage";
import SessionChecker from "./components/mainPage/SessionChecker.jsx";
import YourPages from "./pages/YourPages.jsx";
import Services from "./pages/Services.jsx";

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

  const currentPath = window.location.pathname;
  const showFooter = () => {
    const adminRoutes = ["admin", "user-information", "designs", "reset-password", "failed-verified", "success-verified", "websites", "services", "pages"];
    const pathWithoutLang = currentPath.replace(/^\/(en|ar)/, "");
    return pathWithoutLang === "" || adminRoutes.some((route) => pathWithoutLang === `/${route}`);
  };

  return (
    <div className={isRightToLeft ? "rtl" : "ltr"}>
      <MainNav toggleModal={toggleModal} />
      {localStorage.getItem("refresh_token") && <SessionChecker />}
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
            path={`/${language}/services`}
            element={
              <ProtectedRoute>
                <Services />
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
          <Route
            path={`/${language}/websites`}
            element={
              <ProtectedRoute>
                <YourWebsites />
              </ProtectedRoute>
            }
          />

          {/* edit here */}
          <Route
            path={`/${language}/pages`}
            element={
              <ProtectedRoute>
                <YourPages />
              </ProtectedRoute>
            }
          />

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
                path={`/build-trial-design${index + 1}`}
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
          <Route path={`/${language}/admin-user-page/:userId/:pageId`} element={<AdminUserPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {showFooter() && <Footer></Footer>}
    </div>
  );
}

export default App;
