import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
