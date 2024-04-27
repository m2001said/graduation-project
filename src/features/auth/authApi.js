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

// Function to logout a user
export const logoutUser = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/user/logout-user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Function to forget password
export const forgetPassword = async (email) => {
  const response = await axios.post(`${API_BASE_URL}/user/forget-password`, {
    email,
  });
  return response.data;
};

// Function to reset password
export const resetPassword = async (token, password) => {
  const response = await axios.post(`${API_BASE_URL}/user/reset-password/${token}`, {
    password,
  });
  return response.data;
};
