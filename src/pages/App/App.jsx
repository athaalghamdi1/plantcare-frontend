import { Routes, Route, Link, useLocation } from "react-router-dom";
import React, { useState } from 'react';

import Welcome from "../WelcomePage/index.jsx";
import LoginPage from "../LoginPage/index";
import SignupPage from "../SignupPage/SignupPage.jsx";
import HomePage from "../HomePage/index.jsx";
import AllPlants from "../AllPlants/index.jsx";
import AnalysisForm from "../AnalysisForm/AnalysisForm.jsx";
import ReminderForm from "../ReminderForm/index.jsx";
import "./App.css";

function App() {
const [user, setUser] = useState(null);
  const routes = ["home", "plants", "analysis", "reminders"];
  const mainCSS = routes.filter((r) =>
    location.pathname.includes(r) ? r : ""
  ).join(" ");

  return (
    <>
           <main className={mainCSS}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPage setUser={() => {}} />} />
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
