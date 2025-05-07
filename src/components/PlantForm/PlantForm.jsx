// components/PlantForm/PlantForm.jsx
import { useState } from "react";
import "./PlantForm.css";
import { useNavigate } from "react-router-dom";

export default function PlantForm({ onAddPlant }) {
  const navigate = useNavigate()
  const [newPlant, setNewPlant] = useState({
    name: "",
    type: "",
    lastWatered: ""
    // go back to cat collector and look for the "add new feeding form for the calendar"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlant({ ...newPlant, [name]: value });
  };

  async function handleSubmit() {
    try {
      e.preventDefault();
      await plantAPI.create(newPlant)
      setNewPlant({ name: "", type: "", lastWatered: "" });
      navigate("/plants")
    } catch (err) {
      console.error("Error: ", err)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="plant-form">
      <h2>Add a New Plant</h2>
      <input
        type="text"
        name="name"
        placeholder="Plant Name"
        value={newPlant.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="type"
        placeholder="Plant Type"
        value={newPlant.type}
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        name="lastWatered"
        value={newPlant.lastWatered}
        onChange={handleInputChange}
        required
      />
      <button type="submit" className="add-plant-btn">Add New Plant</button>
    </form>
  );
}
