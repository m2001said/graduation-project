import { Route, Routes } from "react-router";
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

const trialDesignComponents = [
  TrialDesign1,
  TrialDesign2,
  TrialDesign3,
  TrialDesign4,
  TrialDesign5,
  TrialDesign6

];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Designs-page" element={<DesignsPage />} />
        <Route path="/build-your-own-page" element={<BuildYourPage />} />
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
