import axios from "axios";

const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";

// Function to create a new user
export const createUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to login a user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, {
      email,
      password,
    });
    const accessToken = response.data.accessToken;
    localStorage.setItem("token", accessToken);
    return response.data;
  } catch (error) {
    throw error; // Handle error in a meaningful way
  }
};

// Function to logout a user
export const logoutUser = async () => {
  try {
    // Optionally, you can remove the token from local storage upon logout
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/user/logout-user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem("token");
    return response.data;
  } catch (error) {
    // Log the error to the console
    console.error("Logout failed:", error);
    throw error; // Rethrow the error so it can be handled elsewhere
  }
};

// Function to forget password
export const forgetPassword = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/forget-password`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error; // Handle error in a meaningful way
  }
};

// Function to reset password
export const resetPassword = async (token, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/reset-password/${token}`, {
      password,
    });
    return response.data;
  } catch (error) {
    throw error; // Handle error in a meaningful way
  }
};
