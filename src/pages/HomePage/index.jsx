import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
// import SmartReminders from "./components/SmartReminders";
import SmartReminders from "../../components/SmartReminders/SmartReminders.jsx";
import "./style.css";
import * as plantAPI from "../utilities/plants-api.js"
// import PlantForm from "../../components/PlantForm/PlantForm.jsx";
// import plantf from "../../components/PlantForm/PlantForm.jsx"

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
  useEffect(() => {
    async function getAllPlants() {
        try {
            const plantData = await plantAPI.getPlants()
            console.log(plantData)
            setPlants(plantData)
        } catch (err) {
            console.log(err);
        }
    }
    if (plants.length === 0) getAllPlants()
  }, [])

  const handleAddPlant = async (plantData) => {
    try {
      const createdPlant = await plantAPI.createPlant(plantData);
      setPlants([...plants, createdPlant]);
    } catch (error) {
      console.error("Error adding plant:", error);
    }
  };
  
    // fetch('/api/plants', {
    //   method: "POST",
    //   body: JSON.stringify(newPlant),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((data) => setPlants([...plants, data]))
    //   .catch((error) => console.error("Error adding plant:", error));
  

  return (
    <div className="home-page">
      <div className="dashboard">
        <h1>Welcome to Your Plant Care Dashboard</h1>
              {/* <div className="plants-list">
              {plants.length > 0 ? (
                plants.map((plant) => (
                  <div key={plant.id} className="plant-item">
                    <img src={plant.image} alt={plant.name} className="plant-image" />
                    <h3>{plant.name}</h3>
                    <Link to={`/plants/${plant.id}`}>View Details</Link>
                    <button className="edit-btn" onClick={() => handleEditPlant(plant.id)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDeletePlant(plant.id)}>Delete</button>
                  </div>
                ))
              ) : (
                <p>No plants found. Add a new plant!</p>
              )}
            </div> */}
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
