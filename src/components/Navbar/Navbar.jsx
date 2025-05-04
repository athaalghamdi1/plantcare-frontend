// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/welcome" className="navbar-link">Welcome</Link>
        <Link to="/plants" className="navbar-link">All Plants</Link>
        <Link to="/profile" className="navbar-link">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;