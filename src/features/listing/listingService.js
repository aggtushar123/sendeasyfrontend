import axios from "axios";

const baseURL = "https://sendeasy-backend.onrender.com";
const API_URL = `${baseURL}/api/listing/`;

const axiosInstance = axios.create({
  baseURL,
});

const createTraveler = async (travelerData, token) => {
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `${API_URL}travelerlisting`,
    travelerData,
    config
  );

  return response.data;
};

const getTraveler = async (token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}travelerlisting`, config);


  return response.data;
};

const updateTravelerTripsStatus = async (userId, tripStatus, token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axiosInstance.put(`${API_URL}travelerlisting/${userId}/updatetripstatus`, tripStatus, config);

  return response.data;
};
const updateLuggageTripsStatus = async (userId, tripStatus, token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axiosInstance.put(`${API_URL}luggagelisting/${userId}/updatetripstatus`, tripStatus, config);

  return response.data;
};

const createLuggage = async (luggageData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `${API_URL}luggagelisting`,
    luggageData,
    config
  );
  console.log(response);

  return response.data;
};

const getLuggage = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}luggagelisting`, config);

  return response.data;
};

const fetchTravelerListings = async () => {
  const response = await axiosInstance.get(
    "/api/listing/travelerlisting/getall"
  );
  return response.data;
};

const fetchLuggageListings = async () => {
  const response = await axiosInstance.get(
    "/api/listing/luggagelisting/getall"
  );

  return response.data;
};
const listingService = {
  createTraveler,
  getTraveler,
  createLuggage,
  getLuggage,
  fetchTravelerListings,
  fetchLuggageListings,
  updateTravelerTripsStatus,
  updateLuggageTripsStatus
};

export default listingService;
