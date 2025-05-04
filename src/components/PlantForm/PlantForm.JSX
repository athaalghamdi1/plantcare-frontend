// components/PlantForm.jsx
import React, { useState } from 'react';
import { createPlant } from '../utilities/api';

const PlantForm = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const plantData = { name, species, description };
    const newPlant = await createPlant(plantData);
    console.log('Created plant:', newPlant);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} placeholder="Species" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Create Plant</button>
    </form>
  );
};

export default PlantForm;