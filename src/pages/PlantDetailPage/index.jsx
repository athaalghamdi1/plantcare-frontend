import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as plantAPI from "../../pages/utilities/plants-api"

const PlantDetailPage = ({ user}) => {

    const [plant, setPlant] = useState({});
    const {id} = useParams()

    useEffect(() => {
        async function fetchPlant (){
          const res = await plantAPI.getPlantById(id)
          console.log('res', res)
          setPlant(res)
        }
        fetchPlant()
      }, [])

    const handleDeletePlant = (id) => {

    };

    const handleEditPlant = (id) => {

    };

    return(
        <div>
            <h1>Name: {plant.name}</h1>
            <img src={plant.image} alt={plant.name} className="plant-image" />
            <h3>Fertilizing Frequency: {plant.fertilizing_frequency_days}</h3>
            <h3>Last Fertilized: {plant.last_fertilized}</h3>
            <h3>Last Watered: {plant.last_watered}</h3>
            <button className="edit-btn" onClick={() => handleEditPlant(plant.id)}>Edit</button>
            <button className="delete-btn" onClick={() => handleDeletePlant(plant.id)}>Delete</button>
        </div>
    );

}
export default PlantDetailPage;