// components/PlantForm/PlantForm.jsx
import { useState, useEffect } from "react";
import "./PlantForm.css";
import { useNavigate, useParams } from "react-router-dom";
import * as plantAPI from "../../pages/utilities/plants-api"


export default function PlantForm({edit}) {

  const navigate = useNavigate()
  const {id} = useParams()

  const [plant, setPlant] = useState({});
  const [newPlant, setNewPlant] = useState({
    name: "",
    last_fertilized: "",
    last_watered: ""
  });
  
  useEffect(() => {
    async function fetchPlant (){
      const res = await plantAPI.getPlantById(id)
      console.log('res', res)
      setPlant(res)
      setNewPlant({
        name: plant.name,
        last_fertilized: plant.last_fertilized,
        last_watered: plant.last_watered
      })
    }
    fetchPlant()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlant({ ...newPlant, [name]: value });
  };

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res =edit ? await plantAPI.updatePlant({...newPlant}, plant.id) : await plantAPI.createPlant({...newPlant})
      console.log(res)
      setNewPlant({
        name: "",
        last_fertilized: "",
        last_watered: ""
      });
      navigate("/plants")
    } catch (err) {
      console.error("Error: ", err)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="plant-form">
      {edit ? <h2>Edit {plant.name}'s Details</h2> : <h2>Add a Plant</h2>}      <input
        type="text"
        name="name"
        placeholder="Plant Name"
        value={newPlant.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        name="last_fertilized"
        placeholder="Plant Type"
        value={newPlant.last_fertilized}
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        name="last_watered"
        value={newPlant.last_watered}
        onChange={handleInputChange}
        required
      />
      <button type="submit" className="add-plant-btn">{edit ? 'Update Plant' : 'Add New Plant'}</button>
    </form>
  );
}
