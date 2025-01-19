import { UserType } from '../../types/authTypes';
import { doctorApi } from '../../utils/apiClient/doctorapiClient';

// Login API
export const loginDoctor = async (email: string, password: string) => {
  return doctorApi<{ token: string }>( 'auth-doctor/login', 'POST', { email, password });
};

// Register API
export const registerDoctor = async (email: string, password: string, name: string) => {
  return doctorApi<void>('auth-doctor/signup', 'POST', { email, password, name });
};

// Fetch protected data
export const getProtectedData = async () => {
  return doctorApi<{ data: any }>('protected', 'GET');
};


export const fetchDoctorData = async () => {
  return doctorApi<{ success : boolean,  data : {user : UserType} , message : string}>("auth-doctor/doctor", "GET")
};

export const logOutDoctor = async () => {
  return doctorApi<void>("auth-doctor/logout", "POST")
};
