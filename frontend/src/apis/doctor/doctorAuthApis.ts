import { DoctorResponseType } from '../../types/response.types';
import { DoctorLoginInput, DoctorSignUpInput, DoctorUpdateInput } from '../../types/zod.types';
import { doctorApi } from '../../utils/apiClient/doctorapiClient';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';


// Login API
export const loginDoctor = async (data : DoctorLoginInput) => {
  return doctorApi<{ success : boolean,  data : {doctor : DoctorResponseType} , message : string, token : string}>( 'doctor/auth/login', 'POST', data);
};

// Register API
export const signUpDoctor = async (data : DoctorSignUpInput) => {
  return doctorApi<{ success : boolean,  data : {doctor : DoctorResponseType} , message : string, token : string}>('doctor/auth/signup', 'POST', data);
};

export const updateDoctorData = async (data : DoctorUpdateInput) => {
  return doctorApi<{ success : boolean,  data : {doctor : DoctorResponseType} , message : string}>("doctor/edit/update", "PUT", data)
};

// Fetch protected data
export const getProtectedData = async () => {
  return doctorApi<{ data: any }>('protected', 'GET');
};


export const fetchDoctorData = async () => {
  return doctorApi<{ success : boolean,  data : {doctor  : DoctorResponseType} , message : string}>("doctor/auth/doctor", "GET")
};

export const logOutDoctor = async () => {
  return doctorApi<void>("doctor/auth/logout", "POST")
};

export const doctorGoogelLogin = () => {
  return `${BACKEND_URL}/doctor/auth/google-doctor`
}

