import axios from 'axios';

const baseURL = 'http://localhost:3001'; // Change the port to 5000 or your desired backend port
const API_URL = `${baseURL}/api/users/`;

// Create an Axios instance with the specified base URL
const axiosInstance = axios.create({
  baseURL,
});

// Register user
const register = async (userData) => {
  const response = await axiosInstance.post(`${API_URL}signup`, userData);

  return response.data;
};
const updateUser = async (userId, userData) => {
  try {
    const response = await axiosInstance.put(`${API_URL}user/${userId}`, userData);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || 'Error updating user'
    );
  }
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
   
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || 'Error sending OTP'
    );
  }
};
// Logout User
const logout = () => localStorage.removeItem('user');


const googleLogin = async () => {
  try {
    const url = 'http://localhost:3001/auth/login/success';
    const response = await axios.get(url, { withCredentials: true });
    const userData = response.data; 
    localStorage.setItem('user', JSON.stringify(userData))
    return response;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        'Error Logging via Google'
    );
  }
};

const authService = {
  register,
  logout,
  login,
  sendOtp,
  googleLogin,
  updateUser,
};

export default authService;
