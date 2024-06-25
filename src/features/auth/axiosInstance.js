import axios from "axios";
import { refreshToken } from "./authApi";

const axiosInstance = axios.create({
  baseURL: "https://websitebuilderbackend-production-716e.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add authorization token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Retry the request if 401 error and not retried yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshToken();

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("Token refresh failed", err);
        // localStorage.removeItem("token");
        // localStorage.removeItem("refresh_token");
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
