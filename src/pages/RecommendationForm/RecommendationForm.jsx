import React from "react";
import { useState, useEffect } from "react";
import * as plantAPI from "../utilities/plants-api.js"
import * as recAPI from "../utilities/recs-api.js"

export default function RecommendationForm() {
  const [plants, setPlants] = useState([]);
  const [formData, setFormData] = useState({
    symptom: "",
    plant: "",
  });

  console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

async function handleSubmit(e) {
    try {
      e.preventDefault();
      // console.log(formData)
      const res = await recAPI.createRec({...formData})
      console.log(res)
      setFormData({
        symptom: "",
        plant: "",
      });
      navigate("/plants")
    } catch (err) {
      console.error("Error: ", err)
    }
  };

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

  const recPairs = [
    { symptom: "Yellow leaves", solution: "Reduce watering frequency." },
    { symptom: "Brown tips", solution: "Increase humidity slightly." },
    { symptom: "Wilting", solution: "Check soil moisture." },
    { symptom: "Leaf drop", solution: "Avoid cold drafts." },
    { symptom: "Moldy soil", solution: "Improve air circulation." },
    { symptom: "Leggy growth", solution: "Provide more light." },
    { symptom: "Pale leaves", solution: "Add liquid fertilizer." },
    { symptom: "Sticky leaves", solution: "Treat for pests." },
    { symptom: "Root rot", solution: "Repot in dry soil." },
    { symptom: "Spots on leaves", solution: "Remove affected leaves." },
  ];

  return (
    <div>
      <h2>📊 Plant Analysis</h2>
      {/* <p>[Analysis form under development]</p> */}
      <form onSubmit={handleSubmit}>
        <select name="symptom" 
          value={formData.symptom}
          onChange={handleChange} 
        >
          <option value="">Select Symptom</option>
          {recPairs.map(rec => (
            <option value={rec.symptom}>{rec.symptom}</option>
          ))}
        </select>
        <select name="plant" 
          value={formData.plant}
          onChange={handleChange} 
        >
          <option value="">Select Plant</option>
          {plants.map(plant => (
            <option value={plant.id}>{plant.name}</option>
          ))}
        </select>
        <button type="submit"> add symptom </button>
      </form>
    </div>
  );
}
