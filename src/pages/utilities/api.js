// utilities/api.js
const API_URL = 'http://localhost:8000/api/';

export const createPlant = async (plantData) => {
  const response = await fetch(`${API_URL}plants/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plantData),
  });
  return await response.json();
};

export const getPlants = async () => {
  const response = await fetch(`${API_URL}plants/`);
  return await response.json();
};

export const createReminder = async (reminderData) => {
  const response = await fetch(`${API_URL}reminders/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reminderData),
  });
  return await response.json();
};