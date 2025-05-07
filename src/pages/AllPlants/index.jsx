import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import "./style.css";
import * as plantAPI from "../utilities/plants-api.js"
export default function AllPlants() {
  const [plants, setPlants] = useState([]);

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



  return (
    <div className="all-plants-page">
      {/* <Navbar /> */}
      <h1>All Plants</h1>
      <div className="plants-list">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <div key={plant.id} className="plant-item">
              <img src={plant.image} alt={plant.name} className="plant-image" />
              <h3>{plant.name}</h3>
              <Link to={`/plants/${plant.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No plants found. Add a new plant!</p>
        )}
      </div>
    </div>
  );
}
