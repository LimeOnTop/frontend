import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1';

export const getGPTRecommendation = async (token: string) => {
  const response = await axios.post(`${API_URL}/gpt/generate`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};