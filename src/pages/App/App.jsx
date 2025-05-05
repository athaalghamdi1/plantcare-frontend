import { Routes, Route, Link, useLocation } from "react-router-dom";
import Welcome from "../WelcomePage/index.jsx";
import LoginPage from "../LoginPage/index";
import SignupPage from "../SignupPage/SignupPage.jsx";
import HomePage from "../HomePage/index.jsx";
import AllPlants from "../AllPlants/index.jsx";
import AnalysisForm from "../AnalysisForm/AnalysisForm.jsx";
import ReminderForm from "../ReminderForm/index.jsx";
import "./App.css"; // تأكد من وجود التنسيقات

function App() {
  const location = useLocation();

  // اختياري: لتغيير الـ CSS حسب الصفحة
  const routes = ["home", "plants", "analysis", "reminders"];
  const mainCSS = routes.filter((r) =>
    location.pathname.includes(r) ? r : ""
  ).join(" ");

  return (
    <>
     

      {/* Main routes */}
      <main className={mainCSS}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/plants" element={<AllPlants />} />
          <Route path="/analysis" element={<AnalysisForm />} />
          <Route path="/reminders" element={<ReminderForm />} />
          <Route path="*" element={<>404 not found</>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
