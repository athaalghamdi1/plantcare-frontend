import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ user}) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/plants">All Plants</Link>
        </li>
        <li>
          <Link to="/newPlant">Add Plant</Link>
        </li>
        <li>
          <Link to="/reminders">Reminders</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
