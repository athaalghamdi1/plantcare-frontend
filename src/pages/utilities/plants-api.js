import sendRequest from "./sendRequest";
const url = "/plants/"

export const createPlant = async (plantData) => {
  return sendRequest(url, "POST", plantData);
};

export const getPlants = async () => {
  return sendRequest(url, "GET");
};

export async function getPlantById(plantId) {
  return sendRequest(`${url}${plantId}/`)
};


export async function updatePlant(formData, plantId) {
  return sendRequest(`${url}${plantId}/`, "PUT", formData)
}

export async function deletePlant(plantId) {
  return sendRequest(`${url}${plantId}/`, "DELETE")
}
