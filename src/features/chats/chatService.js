import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const API_URL = `${baseURL}/api/chats/`;

const axiosInstance = axios.create({
  baseURL,
});


const accessChat = async (userId, token) => {
  const config = {
    headers: {
      
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axiosInstance.post(`${API_URL}`, { userId }, config);

  return response.data;
};
const fetchChats = async (token) => {
    const config = {
      headers: {
        
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axiosInstance.get(`${API_URL}`, config);
  
    return response.data;
  };

const chatService = {
  accessChat,
  fetchChats
};

export default chatService;
