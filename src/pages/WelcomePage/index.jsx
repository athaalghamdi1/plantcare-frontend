import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Welcome() {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowOptions(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-container">
      {!showOptions ? (
        <h1 className="app-name">PlantCARE 🌿</h1>
      ) : (
        <div className="options">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      )}
    </div>
  );
}
