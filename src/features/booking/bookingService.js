import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const API_URL = `${baseURL}/api/booking/`;

const axiosInstance = axios.create({
  baseURL,
});

// Fetch a booking by ID
const getBookingById = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/${id}`, config);
  return response.data;
};

// Accept a booking by ID
const acceptBooking = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.patch(`${API_URL}/${id}/accept`, config);
  return response.data;
};

const bookingService = {
  getBookingById,
  acceptBooking,
};

export default bookingService;
