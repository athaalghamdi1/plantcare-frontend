import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as plantAPI from "../../pages/utilities/plants-api"

const PlantDetailPage = () => {

    const navigate = useNavigate()

    const [plant, setPlant] = useState({});
    const {id} = useParams()

    useEffect(() => {
        async function fetchPlant (){
          const res = await plantAPI.getPlantById(id)
          console.log('res', res)
          setPlant(res)
        }
        fetchPlant()
      }, [id])

    const handleDeletePlant = async () => {
        const confirmDelete = confirm(`Are you sure you want to delete ${plant.name}?`)
        if (!confirmDelete) return
        try {
            // e.preventDefault();
            const response = await plantAPI.deletePlant(plant.id)
            if (response.success) {
                navigate("/plants");
            }
        } catch (err) {
            console.log(err)
        }
    };

    const handleEditPlant = () => {
        navigate(`/plants/${plant.id}/edit`)
    };

    return (
        <div className="plant-detail-container">
          <h1 className="plant-name">🌿 {plant.name}</h1>
          <img src={plant.image} alt={plant.name} className="plant-image" />
          <div className="plant-info">
            <h3>🧪 Fertilizing Frequency: <span>{plant.fertilizing_frequency_days} days</span></h3>
            <h3>🌱 Last Fertilized: <span>{plant.last_fertilized}</span></h3>
            <h3>💧 Last Watered: <span>{plant.last_watered}</span></h3>
          </div>
          <div className="plant-actions">
            <button className="edit-btn" onClick={handleEditPlant}>Edit</button>
            <button className="delete-btn" onClick={handleDeletePlant}>Delete</button>
          </div>
        </div>
      );
      

}
export default PlantDetailPage;