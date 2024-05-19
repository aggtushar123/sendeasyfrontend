import axios from 'axios';

const baseURL = 'https://sendeasy-backend.onrender.com'; // Update with your API base URL

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;