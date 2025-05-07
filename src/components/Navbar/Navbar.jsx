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
          {window.location.pathname === '/home' ? null : <Link to="/home">Home</Link>}
        </li>
        <li>
          <Link to="/plants">All Plants</Link>
        </li>
        <li>
          {window.location.pathname === '/home' ? null : <Link to="/newPlant">Add Plant</Link>}
        </li>
      </ul>
      <form id="logout-form" onSubmit={handleLogout}>
            <button type="submit">Log out</button>
      </form>
    </nav>
  );

  
};

export default Navbar;
