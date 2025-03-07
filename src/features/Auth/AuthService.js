import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;

export const Login = async (formData) => {
    const res = await axios.post(`${API_URL}/api/user/login`, formData);
    localStorage.setItem('user', JSON.stringify(res.data));
    return res.data;
}

export const Register = async (formData) => {
    const res = await axios.post(`${API_URL}/api/user/register`, formData);
    localStorage.setItem('user', JSON.stringify(res.data));
    return res.data;
}
