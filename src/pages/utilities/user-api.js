const API_URL = '/api/users';
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
        console.log("LOGINFUNCTION")
        const response = await sendRequest(`${API_URL}/login/`, "POST", formData)
        console.log("LOGIN RESPONSE", response)
        localStorage.setItem('token', response.access);
        return response.user
    } catch (err) {
        localStorage.removeItem('token');
        return null;
    }
}