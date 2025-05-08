import React, { useState, useEffect } from "react";
import * as plantAPI from "../utilities/plants-api.js";
import * as recAPI from "../utilities/recs-api.js";
import "./style.css";

export default function RecommendationForm() {
  const [plants, setPlants] = useState([]);
  const [formData, setFormData] = useState({
    symptom: "",
    plant: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res = await recAPI.createRec({ ...formData });
      console.log(res);
      setFormData({
        symptom: "",
        plant: "",
      });
    } catch (err) {
      console.error("Error: ", err);
    }
  }

  useEffect(() => {
    async function getAllPlants() {
      try {
        const plantData = await plantAPI.getPlants();
        setPlants(plantData);
      } catch (err) {
        console.log(err);
      }
    }
    if (plants.length === 0) getAllPlants();
  }, []);

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
    <div className="recommendation-container">
      
      <h2 className="title">Plant Analysis</h2>
      <form onSubmit={handleSubmit} className="recommendation-form">
        <select
          name="symptom"
          value={formData.symptom}
          onChange={handleChange}
          className="select-field"
        >
          <option value="">Select Symptom</option>
          {recPairs.map((rec) => (
            <option key={rec.symptom} value={rec.symptom}>
              {rec.symptom}
            </option>
          ))}
        </select>
        <select
          name="plant"
          value={formData.plant}
          onChange={handleChange}
          className="select-field"
        >
          <option value="">Select Plant</option>
          {plants.map((plant) => (
            <option key={plant.id} value={plant.id}>
              {plant.name}
            </option>
          ))}
        </select>
        <button type="submit" className="submit-btn">
          Add Symptom
        </button>
      </form>
    </div>
  );
}
