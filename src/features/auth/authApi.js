import axios from 'axios';

const API_BASE_URL = 'https://zweb.up.railway.app';

// Function to create a new user
export const createUser = async (name, email, password) => {
  const response = await axios.post(`${API_BASE_URL}/user`, {
    name,
    email,
    password,
  });
  return response.data;
};

// Function to login a user
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/user/login`, {
    email,
    password,
  });
  return response.data;
};