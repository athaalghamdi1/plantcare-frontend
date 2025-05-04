import { Routes, Route } from "react-router-dom";
import Welcome from "../WelcomePage/index.jsx";
import LoginPage from "../LoginPage/index";
import SignupPage from "../SignupPage/SignupPage.jsx";
import HomePage from "..//HomePage/index.jsx";
import AllPlants from "../AllPlants/index.jsx";
// import NotFound from "../pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/plants" element={<AllPlants />} />
      <Route path="*" element={<>404 not found</>} />
    </Routes>
  );
}

export default App
