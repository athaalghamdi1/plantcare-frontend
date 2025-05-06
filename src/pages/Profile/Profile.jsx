// import React, { useState } from 'react';
// import './Profile.css'; 

// const Profile = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [language, setLanguage] = useState('en');

//   const handleLanguageChange = (e) => {
//     setLanguage(e.target.value);
//   };

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const handleLogout = () => {
//     console.log('User logged out');
//   };

//   return (
//     <div className={`sidebar ${isDarkMode ? 'dark' : ''}`}>
//       <div className="profile-header">
//         <h1>Your Profile</h1>
//       </div>
//       <div className="profile-options">
//         <div className="profile-option">
//           <label>Language:</label>
//           <select value={language} onChange={handleLanguageChange}>
//             <option value="en">English</option>
//             <option value="ar">Arabic</option>
//           </select>
//         </div>

//         <div className="profile-option">
//           <button onClick={toggleDarkMode}>
//             {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//           </button>
//         </div>

//         <div className="profile-option">
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
