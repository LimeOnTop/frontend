import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1';

export const addProduct = async (productId: string, token: string) => {
    const response = await axios.post(`${API_URL}/user/products`, { productId }, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const removeProduct = async (productId: string, token: string) => {
    const response = await axios.delete(`${API_URL}/user/products`, {
        data: { productId },
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const updatePreference = async (preferenceName: string, token: string) => {
    const response = await axios.delete(`${API_URL}/user/products`, {
        data: { preferenceName },
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};