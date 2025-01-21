


import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ADMIN_TOKEN } from '../consts';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: BACKEND_URL
});

// request interceptor to include the token if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ADMIN_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor for handling errors
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

// Helper function to make API calls
export const adminApi = async <T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: object,
  config?: AxiosRequestConfig
): Promise<T> => {

  try {
    const response = await apiClient.request<T>({
      url: endpoint,
      method,
      data,
      ...config,
    });

    return response.data
   
    
  } catch (error: any) {

    if (error.response) {
      // Handle error responses from the server
      console.error('API Error:', error.response.status, error.response.data.message);

      return error.response.data

    } else if (error.request) {
      // Handle no response from the server

      console.error('No response received:', error.request);
      return error.data
    } else {
      // Handle other errors (e.g., network errors)
      console.error('Error during request:', error.message);
      return error.data
    }
        
  }
};
