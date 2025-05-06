import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
// import SmartReminders from "./components/SmartReminders";
import SmartReminders from "../../components/SmartReminders/SmartReminders.jsx";
import "./style.css";

export default function Home() {
  const [reminders, setReminders] = useState([]);
  const [plants, setPlants] = useState([]);

  // useEffect(() => {
  //   fetch('/api/due-reminders/')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (Array.isArray(data)) {
  //         setReminders(data);
  //       } else {
  //         console.error("Data is not an array:", data);
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching reminders:", error));

  //   fetch('/api/plants/')
  //     .then((response) => response.json())
  //     .then((data) => setPlants(data))
  //     .catch((error) => console.error("Error fetching plants:", error));
  // }, []);

  const handleAddPlant = () => {
    const newPlant = { name: "New Plant", type: "Succulent", lastWatered: new Date() };
    fetch('/api/plants', {
      method: "POST",
      body: JSON.stringify(newPlant),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setPlants([...plants, data]))
      .catch((error) => console.error("Error adding plant:", error));
  };

  return (
    <div className="home-page">
      <Navbar />
      <div className="dashboard">
        <h1>Welcome to Your Plant Care Dashboard</h1>
        <div className="plant-actions">
          {/* <button className="upload-plant-btn">Upload Plant Image</button> */}
          <button className="add-plant-btn" onClick={handleAddPlant}>Add New Plant</button>
        </div>
        <div className="recommendations">
          <h2>Daily Recommendations</h2>
          <p>Based on your plants, here are today's tips!</p>
        </div>
        
        <div className="reminders">
          <h2>Due Reminders</h2>
          <SmartReminders reminders={reminders} />
        </div>
      </div>
    </div>
  );
}
