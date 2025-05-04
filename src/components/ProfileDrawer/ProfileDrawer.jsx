import "./navbar.css";

export default function ProfileDrawer() {
  return (
    <div className="profile-sidebar">
      <h3>👤 Profile</h3>
      <button>Change Theme</button>
      <button>Change Language</button>
      <button>Logout</button>
    </div>
  );
}
