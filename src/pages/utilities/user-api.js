const API_URL = '/api';
import sendRequest from "./sendRequest";

export async function signup(formData) {
    try {
        const response = await sendRequest(`${API_URL}/signup/`, "POST", formData)
        localStorage.setItem('token', response.access);
        return response.user
    } catch(err) {
        localStorage.removeItem('token');
        return null;
    }
}
export async function login(formData) {
    try {
        const response = await sendRequest(`${url}login/`, "POST", formData)
        localStorage.setItem('token', response.access);
        return response.user
    } catch (err) {
        localStorage.removeItem('token');
        return null;
    }
}