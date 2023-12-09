import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import TrialDesign1 from "./pages/TrialDesign1";
import TrialDesign2 from "./pages/TrialDesign2";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trial-design1" element={<TrialDesign1 />} />
        <Route path="/trial-design2" element={<TrialDesign2 />} />
      </Routes>
    </>
  );
}

export default App;
