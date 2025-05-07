// components/Sidebar.jsx
import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en"); 

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.body.classList.toggle("dark-theme", e.target.value === "dark");
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Profile</h2>
      <div className="sidebar-options">
        <div className="sidebar-option">
          <label>Theme:</label>
          <select onChange={handleThemeChange} value={theme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="sidebar-option">
          <label>Language:</label>
          <select onChange={handleLanguageChange} value={language}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
