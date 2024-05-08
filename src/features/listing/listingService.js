import axios from 'axios';


const baseURL = 'http://localhost:3001';
const API_URL = `${baseURL}/api/listing/`

const axiosInstance = axios.create({
    baseURL,
  });

const createTraveler = async (travelerData, token) => {
   
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(`${API_URL}travelerlisting`, travelerData, config)
    console.log(response)

    return response.data
}

const getTraveler = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${API_URL}`, config)

    return response.data
}
const createLuggage = async (luggageData, token) => {
   
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(`${API_URL}luggagelisting`, luggageData, config)
    console.log(response)

    return response.data
}

const getLuggage = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${API_URL}`, config)

    return response.data
}
const listingService = {
    createTraveler,
    getTraveler,
    createLuggage,
    getLuggage

}

  
  export default listingService;