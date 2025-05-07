import React from "react";
import { useNavigate, Link } from "react-router-dom";
import * as usersAPI from "../../pages/utilities/user-api";

import "./navbar.css";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault()
    usersAPI.logout()
    setUser(null);
    navigate("/")
}

if (user)
  return (

    <nav className="navbar">
      <ul>
        <li>
          {window.location.pathname === '/home' ? "" : <Link to="/home">Home</Link>}
        </li>
        <li>
          <Link to="/plants">All Plants</Link>
        </li>
        <li>
          {window.location.pathname === '/home' ? "" : <Link to="/newPlant">Add Plant</Link>}
        </li>
        <li>
          {window.location.pathname === '/home' ? "" : <Link to="/reminders">Reminders</Link>}
        </li>
        <form id="logout-form" onSubmit={handleLogout}>
             <button type="submit">Log out</button>
        </form>
      </ul>
    </nav>
  );

  
};

export default Navbar;
