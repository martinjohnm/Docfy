import { ADMIN_TOKEN, DOCTOR_TOKEN, TOKEN } from "./consts";

// utils/auth.ts
  export const getToken = (): string | null => {
    return localStorage.getItem(TOKEN);
  };
  
  export const setToken = (token: string): void => {
    localStorage.setItem(TOKEN, token);
  };
  
  export const removeToken = (): void => {
    localStorage.removeItem(TOKEN);
  };


  export const getDoctorToken = (): string | null => {
    return localStorage.getItem(DOCTOR_TOKEN);
  };
  
  export const setDoctorToken = (token: string): void => {
    localStorage.setItem(DOCTOR_TOKEN, token);
  };
  
  export const removeDoctorToken = (): void => {
    localStorage.removeItem(DOCTOR_TOKEN);
  };


  export const geAdminToken = (): string | null => {
    return localStorage.getItem(ADMIN_TOKEN);
  };
  
  export const seAdminToken = (token: string): void => {
    localStorage.setItem(ADMIN_TOKEN, token);
  };
  
  export const removAdminToken = (): void => {
    localStorage.removeItem(ADMIN_TOKEN);
  };
  