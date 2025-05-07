import { Routes, Route, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import * as userAPI from '../utilities/user-api.js'

import Welcome from "../WelcomePage/index.jsx";
import LoginPage from "../LoginPage/index";
import SignupPage from "../SignupPage/SignupPage.jsx";
import HomePage from "../HomePage/index.jsx";
import AllPlants from "../AllPlants/index.jsx";
import AnalysisForm from "../AnalysisForm/AnalysisForm.jsx";
import ReminderForm from "../ReminderForm/index.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import PlantForm from "../../components/PlantForm/PlantForm.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import PlantDetailPage from "../PlantDetailPage/index.jsx";
import "./App.css";

function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  const routes = ["home", "plants", "analysis", "reminders"];
  const mainCSS = routes.filter((r) =>
    location.pathname.includes(r) ? r : ""
  ).join(" ");

  useEffect(() => {
    async function fetchUser (){
      const res = await userAPI.getUser()
      // console.log('res', res)
      setUser(res)
    }
    fetchUser()
  }, [])

  // console.log(user)

  return (

      <main className={mainCSS}>
        <Navbar user={user} setUser={setUser}/>
        <Routes>
        { user 
          ? <>
              {/* <Route path="/" element={<Welcome user={user} />} /> */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/newPlant" element={<PlantForm />} />
              <Route path="/plants" element={<AllPlants />} />
              <Route path="/analysis" element={<AnalysisForm />} />
              <Route path="/reminders" element={<ReminderForm />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/plants/:id" element={<PlantDetailPage/>} />
              <Route path="/plants/:id/edit" element={<PlantForm edit={true}/>} />

              {/* <Route path="*" element={<>404 not found</>} /> */}
          </>
          : <>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/signup" element={<SignupPage setUser={setUser} />} />
            {/* <Route path="/home" element={<HomePage />} /> */}
            <Route path="*" element={<>404 not found</>} />
          </>
        }
        </Routes>
      </main>
  );
}

export default App;
