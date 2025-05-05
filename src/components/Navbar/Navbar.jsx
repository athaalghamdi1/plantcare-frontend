import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileDrawer from "../ProfileDrawer/ProfileDrawer";

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="nav-logo">
          <Link to="/home">🌿 PlantCare</Link>
        </div>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/plants">My Plants</Link>
        </div>
        <button className="profile-btn" onClick={() => setShowProfile(!showProfile)}>
          Profile
        </button>
      </div>
      {showProfile && <ProfileDrawer />}
    </nav>
  );
}

export default Navbar;
