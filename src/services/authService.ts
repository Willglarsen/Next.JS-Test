// services/authService.ts
import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com/auth';

export const login = async (username: string, password: string, expiresInMins = 60) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
      expiresInMins,
    });
    return response.data; // Assuming the API returns user data upon successful login
  } catch (error) {
    throw new Error('Failed to authenticate. Please check your credentials.');
  }
};
