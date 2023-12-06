import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import Featrue1 from "./components/sections/features/feature1/Featrue1";
import Logos1 from "./components/sections/logos/logos1/Logos1.jsx";
import Testimonials1 from "./components/sections/testimonials/testimonials1/Testimonials1.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
        <Featrue1/> 
        <Testimonials1/>
        <Logos1/>
     </>
  );
}

export default App;
