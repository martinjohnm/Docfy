


import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { TOKEN } from './consts';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: BACKEND_URL
});

// request interceptor to include the token if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN);

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
export const callApi = async <T>(
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
   
    return response.data;
  } catch (error: any) {
  
    throw new Error(
      
      error.response?.data?.message || 'Something went wrong. Please try again.'
    );
        
  }
};
