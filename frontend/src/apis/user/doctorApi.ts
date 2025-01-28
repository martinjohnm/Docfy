import { DoctorResponseType } from '../../types/response.types';
import { userApi } from '../../utils/apiClient/apiClient';



// Fetch doctors
export const getDoctors = async () => {
  return userApi<{ success : boolean,  data : {doctors : DoctorResponseType[]} , message : string}>('doctor/get-all', 'GET');
};

