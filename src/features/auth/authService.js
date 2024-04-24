import axios from 'axios';

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
  return response.data;
};

// Login
const login = async (userData) => {
  const response = await axiosInstance.post(`${API_URL}login`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const sendOtp = async (otpData) => {
  try {
    const response = await axiosInstance.post(`${API_URL}sendOtp`, otpData);
  console.log(response);
  console.log(response.data.user);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
    
  }
    return response
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message || 'Error sending OTP');
  }
};
// Logout User
const logout = () => localStorage.removeItem('user');



const authService = {
  register,
  logout,
  login,
  sendOtp
};

export default authService;
