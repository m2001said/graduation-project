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
    console.log(response);
    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    localStorage.setItem("token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    return response.data;
  } catch (error) {
    throw error; // Handle error in a meaningful way
  }
};

// Function to logout a user
export const logoutUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/user/logout-user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    return response.data;
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};

// Function to fetch user avatar
export const fetchUserAvatar = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/user/avatar`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw Error(error.response.data.error);
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
    throw error;
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
    throw error;
  }
};

// Function to refresh access token
export const refreshToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");

  try {
    const response = await axios.get(`${API_BASE_URL}/user/refresh-token`, {
      headers: {
        Authorization: `Bearer ${refresh_token}`,
      },
    });

    const newAccessToken = response.data.accessToken;
    localStorage.setItem("token", newAccessToken);
    console.log(" refresh access token");
    return newAccessToken; // Return the new access token
  } catch (error) {
    console.error("Token refresh failed", error);
    throw error;
  }
};