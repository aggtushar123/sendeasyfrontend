import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

const baseURL = 'http://localhost:5000'; // Change the port to 5000 or your desired backend port
const API_URL = `${baseURL}/api/users/`;


// Create an Axios instance with the specified base URL
const axiosInstance = axios.create({
  baseURL,
});

// Register user
const register = async (userData) => {
  const response = await axiosInstance.post(`${API_URL}signup`, userData);
    console.log(response);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  setTimeout(async () => {

      const userResponse = await axiosInstance.get(`${API_URL}user/${response.data.data.userId}`);
      console.log(userResponse);
      if (userResponse.data.exists === false) {
        localStorage.removeItem('user');
      } 
      else{
        localStorage.setItem('user',JSON.stringify(userResponse.data.user) )
      } 

  }, 26000);
  return response.data;
};

// Login
const login = async (userData) => {
  const response = await axiosInstance.post(`${API_URL}login`, userData);
    // console.log("login wala response",response)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Logout User
const logout = () => localStorage.removeItem('user');

const authService = {
  register,
  logout,
  login,
};

export default authService;
