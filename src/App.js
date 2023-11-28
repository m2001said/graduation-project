// import "./App.css";
import { Route, Routes } from "react-router";
import DashboardLayout from "./components/mainPage/DashboardLayout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/mainpage" element={<DashboardLayout />} />
      </Routes>
    </>
  );
}

export default App;
