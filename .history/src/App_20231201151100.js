import "./App.css";
import Hero from "./components/sections/heros/hero1/Hero";
import Services from "./components/sections/services/services1/services1Card/Services";

function App() {
  return (
    <div className="App">
      <Hero/> 
      <Services/>


    </div>
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
