import axios from "axios"

// const API_URL = "https://authentication-api-qtax.onrender.com/api/user";
const API_URL = "https://authenticationeskills.vercel.app/api/user";

const Login = async (formData) => {
    const res = await axios.post(`${API_URL}/login`, formData);
    localStorage.setItem('user', JSON.stringify(res.data));
    return res.data;
}

const Register = async (formData) => {
    const res = await axios.post(`${API_URL}/register`, formData);
    localStorage.setItem('user', JSON.stringify(res.data));
    return res.data;
}

const AuthenServe = {Register , Login}
export default AuthenServe