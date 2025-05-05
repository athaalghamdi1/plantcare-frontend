import { useState } from "react";

export default function ProfileDrawer() {
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="profile-drawer">
      <h3>Profile Settings</h3>
      <label>
        Language:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </label>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button onClick={() => alert("Logged out")}>Logout</button>
    </div>
  );
}
