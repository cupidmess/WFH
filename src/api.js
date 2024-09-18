import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const api = axios.create ({
  baseURL:import.meta.env.VITE_API_URL
})
api.interceptors.response.use(
  response => response, // If the response is successful, return it
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      // Assuming you store your refresh token in localStorage
      const refreshToken = localStorage.getItem('REFRESH_TOKEN');
      
      try {
        // Call your backend API to get a new access token using the refresh token
        const response = await axios.post('/auth/refresh-token/', {
          refreshToken: refreshToken
        });
        
        const newToken = response.data.accessToken;
        localStorage.setItem(ACCESS_TOKEN, newToken);
        
        // Update the original request with the new token and retry
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token failed', refreshError);
        // Handle the case where the refresh token is invalid or expired
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);
export default api 