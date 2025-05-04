import "./style.css";
import { useState } from "react";
// import ProfileSidebar from "../components/ProfileSidebar";
import ProfileDrawer from "../../components/ProfileDrawer/ProfileDrawer";

export default function Home() {
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="home-container">
      <ProfileDrawer />
      <div className="main-content">
        <h2>Welcome to PlantCARE 🌿</h2>
        <input type="file" onChange={handleUpload} />
        {image && (
          <div>
            <img src={image} alt="Uploaded Plant" style={{ width: "200px", marginTop: "1rem" }} />
            <p>📋 Recommendations will appear here (from AI model)</p>
          </div>
        )}
      </div>
    </div>
  );
}
