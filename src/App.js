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
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Designs-page" element={<DesignsPage />} />
        <Route path="/preview-trial-design1" element={<TrialDesign1 />} />
        <Route path="/preview-trial-design2" element={<TrialDesign2 />} />
        <Route path="/preview-trial-design3" element={<TrialDesign3 />} />
        <Route path="/preview-trial-design4" element={<TrialDesign4 />} />
        <Route path="/preview-trial-design5" element={<TrialDesign5 />} />
        <Route path="/preview-trial-design6" element={<TrialDesign6 />} />
        <Route element={<Dashboard />}>
          <Route path="/build-trial-design1" element={<TrialDesign1 />} />
          <Route path="/build-trial-design2" element={<TrialDesign2 />} />
          <Route path="/build-trial-design3" element={<TrialDesign3 />} />
          <Route path="/build-trial-design4" element={<TrialDesign4 />} />
          <Route path="/build-trial-design5" element={<TrialDesign5 />} />
          <Route path="/build-trial-design6" element={<TrialDesign6 />} />
        </Route>
        {/* <Route path="/trial-design1" element={<TrialDesign1 />} /> */}
      </Routes>
    </>
  );
}

export default App;
