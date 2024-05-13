import axios from 'axios';

const baseURL = 'http://localhost:3001'; // Update with your API base URL

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;