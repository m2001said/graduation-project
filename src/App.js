
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import TrialDesign from "./pages/TrialDesign";
function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trialDesign" element={<TrialDesign />} />
       </Routes>
        
    </>
  );
}

export default App;
