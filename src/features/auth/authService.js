import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL // Change the port to 5000 or your desired backend port
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
const getUser = async (userId) => {
  try {
    const response = await axiosInstance.get(`${API_URL}user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || 'Error getting user'
    );
  }
};

const searchUser = async (searchData,token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}searchuser?search=${searchData}`, config);
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
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
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
    const url = `${process.env.SENDEASY_BACKEND_URL}/auth/login/success`;
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
  getUser,
  searchUser
};

export default authService;
