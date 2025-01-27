import { DoctorResponseType } from '../../types/response.types';
import { DoctorUpdateInput } from '../../types/zod.types';
import { doctorApi } from '../../utils/apiClient/doctorapiClient';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';


// Login API
export const loginDoctor = async (email: string, password: string) => {
  return doctorApi<{ token: string }>( 'doctor/auth/login', 'POST', { email, password });
};

// Register API
export const registerDoctor = async (email: string, password: string, name: string) => {
  return doctorApi<void>('doctor/auth/signup', 'POST', { email, password, name });
};

export const updateDoctorData = async (data : DoctorUpdateInput) => {
  return doctorApi<{ success : boolean,  data : {doctor : DoctorResponseType} , message : string}>("doctor/edit/update", "PUT", data)
};

// Fetch protected data
export const getProtectedData = async () => {
  return doctorApi<{ data: any }>('protected', 'GET');
};


export const fetchDoctorData = async () => {
  return doctorApi<{ success : boolean,  data : {user : DoctorResponseType} , message : string}>("doctor/auth/doctor", "GET")
};

export const logOutDoctor = async () => {
  return doctorApi<void>("doctor/auth/logout", "POST")
};

export const doctorGoogelLogin = () => {
  return `${BACKEND_URL}/doctor/auth/google-doctor`
}

