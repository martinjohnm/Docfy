import { UserType } from '../types/authTypes';
import { callApi } from '../utils/apiClient';

// Login API
export const loginUser = async (email: string, password: string) => {
  return callApi<{ token: string }>( 'auth/login', 'POST', { email, password });
};

// Register API
export const registerUser = async (email: string, password: string, name: string) => {
  return callApi<void>('auth/signup', 'POST', { email, password, name });
};

// Fetch protected data
export const getProtectedData = async () => {
  return callApi<{ data: any }>('protected', 'GET');
};


export const fetchUserData = async () => {
  return callApi<{ success : boolean,  data : {user : UserType} , message : string}>("auth/user", "GET")
};

export const logOutUser = async () => {
  return callApi<void>("auth/logout", "POST")
};
