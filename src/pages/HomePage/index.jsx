import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SmartReminders from "../../components/SmartReminders/SmartReminders.jsx";
import "./style.css";
import * as plantAPI from "../utilities/plants-api.js"
import * as recAPI from "../utilities/recs-api.js"

export default function Home() {
  const [reminders, setReminders] = useState([]);
  const [plants, setPlants] = useState([]);
  const [recs, setRecs] = useState([]);

  
  useEffect(() => {
    async function getAllPlants() {
        try {
            const plantData = await plantAPI.getPlants()
            // console.log(plantData)
            setPlants(plantData)
        } catch (err) {
            console.log(err);
        }
    }
    if (plants.length === 0) getAllPlants()
  }, [])

  useEffect(() => {
    async function getAllRecs() {
        try {
            const recData = await recAPI.getRecs()
            console.log(recData)
            setRecs(recData)
        } catch (err) {
            console.log(err);
        }
    }
    if (recs.length === 0) getAllRecs()
  }, [])

  const handleAddPlant = async (plantData) => {
    try {
      const createdPlant = await plantAPI.createPlant(plantData);
      setPlants([...plants, createdPlant]);
    } catch (error) {
      console.error("Error adding plant:", error);
    }
  };
  
  

  return (
    <div className="home-page">
      <div className="dashboard">
        <h1>Welcome to Your Plant Care Dashboard</h1>
        <div className="recommendations">
          <h2>Daily Recommendations</h2>
          <p>Based on your plants, here are today's tips!</p>
            {recs.length > 0 ? (
              recs.map((rec) => (
                <div key={rec.id} className="rec-item">
                  <p>{rec.symptom}</p>
                  <p>{rec.solution}</p>
                </div>
              ))) : (
                <p>Plants are all good. Add a new symptom for more recommendations!</p>
              )}
        </div>
        
        <div className="reminders">
          <h2>Due Reminders</h2>
          <SmartReminders reminders={reminders} />
        </div>
      </div>
    </div>
  );
}
