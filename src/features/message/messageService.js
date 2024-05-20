import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const API_URL = `${baseURL}/api/message/`;

const axiosInstance = axios.create({
  baseURL,
});


const fetchMessage = async (chatId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axiosInstance.get(`${API_URL}/${chatId}`, config);
    return response.data;
  };
  

const sendMessage = async (content, chatId, token) => {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axiosInstance.post(`${API_URL}`, {content, chatId}, config);
  
    return response.data;
  };

const messageService = {
  sendMessage,
  fetchMessage
};

export default messageService;
