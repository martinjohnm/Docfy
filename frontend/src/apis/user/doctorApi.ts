import { DoctorResponseType } from '../../types/response.types';
import { userApi } from '../../utils/apiClient/apiClient';



// Fetch doctors
export const getDoctors = async () => {
  return userApi<{ success : boolean,  data : {doctors : DoctorResponseType[]} , message : string}>('doctor/get-all', 'GET');
};



export const getDoctorsByFilters = async ({hospitalId, categoryId, searchTerm} : {hospitalId : string, categoryId : string, searchTerm : string}) => {
  return userApi<{ success : boolean,  data : {doctors : DoctorResponseType[]} , message : string}>(`doctor/get-doctors-by-filter/?hospitalId=${hospitalId}&specializationId=${categoryId}&searchTerm=${searchTerm}`, 'GET');
};

