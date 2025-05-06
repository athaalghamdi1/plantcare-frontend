import sendRequest from "./sendRequest";

// utilities/api.js
const API_URL = '/api/';

export const createPlant = async (plantData) => {
  const response = await sendRequest(`${API_URL}plants/`,"POST", plantData);
  return await response;
};

export const getPlants = async () => {
  const response = await sendRequest(`${API_URL}plants/`, "GET");
  return await response ;
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

