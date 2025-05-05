import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Welcome() {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowOptions(true);
    }, 2000);
  }, []);

  return (
    <div className="welcome-container">
      {!showOptions ? (
        <h1>🌿 PlantCARE</h1>
      ) : (
        <div className="welcome-buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      )}
    </div>
  );
}
