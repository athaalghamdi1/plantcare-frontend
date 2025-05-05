import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./style.css";

export default function Home() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setImage(URL.createObjectURL(uploadedFile));
    setAnalysisResult("");
  };

  const handleAnalyze = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setAnalysisResult(data.result || "No analysis result returned.");
    } catch (error) {
      setAnalysisResult("Error during analysis. Make sure the server is running.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h2>👋 Welcome back, Mohamed! Here's a quick overview of your plants today.</h2>

        <div className="top-section">
          <div className="analyzer-card">
            <h3>📸 Plant Image Analyzer</h3>
            <input type="file" onChange={handleUpload} accept="image/*" />
            {image && <img src={image} alt="Plant" className="preview-image" />}
            {file && <button onClick={handleAnalyze}>🔍 Analyze Image</button>}
            {loading && <p>⏳ Analyzing image...</p>}
            {!loading && analysisResult && <p>{analysisResult}</p>}
          </div>

          <div className="add-plant-card">
            <h3>🌿 Add a New Plant</h3>
            <button className="add-button">+ Add Plant</button>
          </div>
        </div>

        <div className="recommendations">
          <h3>🌞 Today's Recommendations</h3>
          <ul>
            <li>💧 Water the basil plant today</li>
            <li>🌤️ Keep the lavender out of direct sunlight</li>
          </ul>
        </div>

        <div className="reminders">
          <h3>⏰ Upcoming Reminders</h3>
          <ul>
            <li>🧪 Fertilize the cactus | Tomorrow</li>
            <li>💦 Water the mint plant | In two days</li>
          </ul>
        </div>
      </div>
    </>
  );
}
