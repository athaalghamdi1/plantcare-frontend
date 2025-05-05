import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Plant1 from "../../assets/images/picPlant1.png";
import Plant2 from "../../assets/images/picPlant2.png";

const Welcome = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowOptions(true);
    }, 2000);
  }, []);

  return (
    <div className="welcome-container">
      <div className="title-container">
        <h1 className="app-title">🌿 PlantCARE</h1>
      </div>

      {showOptions && (
        <div className="buttons-container">
          <div className="welcome-buttons">
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Signup</button>
          </div>
        </div>
      )}

      <img className="cornerr-image" src={Plant2} alt="cornerr-image" />
      <img className="corner-image" src={Plant1} alt="corner-image" />
    </div>
  );
};

export default Welcome;
