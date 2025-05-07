import sendRequest from "./sendRequest";
const url = "/recs/"

export const createRec = async (recData) => {
  return sendRequest(url, "POST", recData);
};

export const getRecs = async () => {
  return sendRequest(url, "GET");
};