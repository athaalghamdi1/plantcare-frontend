import sendRequest from "./sendRequest";
const url = "/plants/"

export const createPlant = async (plantData) => {
  return sendRequest(url, "POST", plantData);
};

export const getPlants = async () => {
  return sendRequest(url, "GET");
};

// export const createReminder = async (reminderData) => {
//   const response = await fetch(`${API_URL}reminders/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reminderData),
//   });
//   return await response.json();
// };

