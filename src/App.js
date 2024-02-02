import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import TrialDesign1 from "./pages/TrialDesign1";
import TrialDesign2 from "./pages/TrialDesign2";
import TrialDesign3 from "./pages/TrialDesign3";
import TrialDesign4 from "./pages/TrialDesign4";
import TrialDesign5 from "./pages/TrialDesign5";
import TrialDesign6 from "./pages/TrialDesign6";
import TrialDesign10 from "./pages/TrialDesign10";
function App() {
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
          <Route path="/trial-design10" element={<TrialDesign10 />} />
        </Route>
        {/* <Route path="/trial-design1" element={<TrialDesign1 />} /> */}

      </Routes>
    </>
  );
}

export default App;
