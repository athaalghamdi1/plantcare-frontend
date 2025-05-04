// src/pages/ProfilePage.jsx
import React, { useState } from 'react';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // هنا يمكنك إضافة المنطق لتغيير اللغة في تطبيقك
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // هنا يمكنك إضافة المنطق لتغيير الوضع (داكن/فاتح)
  };

  const handleLogout = () => {
    // هنا يمكنك إضافة منطق تسجيل الخروج
    console.log('User logged out');
  };

  return (
    <div>
      <h1>Your Profile</h1>
      <div className="profile-options">
        <div>
          <label>Language:</label>
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>

        <div>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>

        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;