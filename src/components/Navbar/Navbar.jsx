// Navbar.jsx
import { useState } from 'react'
import ProfileDrawer from './ProfileDrawer'
import { Link } from 'react-router-dom'

function Navbar() {
  const [showProfile, setShowProfile] = useState(false)

  return (
    <nav className="flex justify-between p-4 bg-green-100">
      <div className="flex gap-4">
        <Link to="/home">Home</Link>
        <Link to="/plants">My Plants</Link>
      </div>
      <button onClick={() => setShowProfile(!showProfile)}>Profile</button>
      {showProfile && <ProfileDrawer />}
    </nav>
  )
}

export default Navbar
