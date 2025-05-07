import React from "react";
import "./Header.css"; 

const Header = () => {
  return (
    <header className="app-header">
      <img src="/path/to/your/logo.png" alt="App Logo" className="app-logo" />
      <span className="app-title">Plant Tracker</span> 
    </header>
  );
};

export default Header;
