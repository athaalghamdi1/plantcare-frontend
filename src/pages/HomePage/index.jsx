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
      <div className="home-container">
        <h2>🌱 Smart Plant Care Assistant</h2>

        <div className="cards-container">
          <div className="card">
            <h3>🌼 Indoor Plant Care Tips</h3>
            <ul>
              <li>Water when the top 1-2 inches of soil are dry.</li>
              <li>Place near a bright window with indirect sunlight.</li>
              <li>Wipe leaves with a damp cloth weekly.</li>
            </ul>
          </div>

          <div className="card">
            <h3>📸 Upload Plant Image</h3>
            <input type="file" onChange={handleUpload} accept="image/*" />
            {image && <img src={image} alt="Plant preview" className="preview-image" />}
            {file && <button onClick={handleAnalyze}>🔍 Analyze with AI</button>}
          </div>

          <div className="card">
            <h3>🧠 AI Disease Diagnosis</h3>
            {loading ? (
              <p>⏳ Analyzing image...</p>
            ) : analysisResult ? (
              <p>{analysisResult}</p>
            ) : (
              <p>Upload a plant image to get an AI diagnosis.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
