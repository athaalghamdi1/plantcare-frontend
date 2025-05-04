// pages/HomePage/index.jsx
import React, { useEffect, useState } from 'react';
import PlantForm from '../../components/PlantForm';
import { getPlants } from '../../utilities/api';

const HomePage = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const fetchedPlants = await getPlants();
      setPlants(fetchedPlants);
    };
    fetchPlants();
  }, []);

  return (
    <div>
      <h1>Welcome to PlantCare</h1>
      <PlantForm />
      <ul>
        {plants.map(plant => (
          <li key={plant.id}>
            <strong>{plant.name}</strong> — {plant.care_instructions}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;