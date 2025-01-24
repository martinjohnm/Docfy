import { UserType } from '../../types/authTypes';
import { UserResponseType } from '../../types/response.types';
import { userApi } from '../../utils/apiClient/apiClient';

// Login API
export const loginUser = async (email: string, password: string) => {
  return userApi<{ token: string }>( 'auth/login', 'POST', { email, password });
};

// Register API
export const registerUser = async (email: string, password: string, name: string) => {
  return userApi<void>('auth/signup', 'POST', { email, password, name });
};

// Fetch protected data
export const getProtectedData = async () => {
  return userApi<{ data: any }>('protected', 'GET');
};


export const fetchUserData = async () => {
  return userApi<{ success : boolean,  data : {user : UserResponseType} , message : string}>("auth/user", "GET")
};

export const logOutUser = async () => {
  return userApi<void>("auth/logout", "POST")
};
