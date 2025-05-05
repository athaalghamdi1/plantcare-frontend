import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2>🌱 Recommendations for your Plant</h2>
        <input type="file" onChange={handleUpload} />
        {image && (
          <>
            <img src={image} alt="plant" style={{ width: 200, margin: "20px 0" }} />
            <p>AI Recommendations appear here...</p>
          </>
        )}
      </div>
    </>
  );
}
