import { DoctorResponseType } from '../../types/response.types';
import { userApi } from '../../utils/apiClient/apiClient';



// Fetch doctors
export const getDoctors = async () => {
  return userApi<{ success : boolean,  data : {doctors : DoctorResponseType[]} , message : string}>('doctor/get-all', 'GET');
};



export const getDoctorsByFilters = async ({hospitalId, categoryId, searchTerm, date, dateLoc, skip, take} : {hospitalId : string, categoryId : string, searchTerm : string, date : string,dateLoc : string, skip : number, take : number}) => {
  return userApi<{ success : boolean,  data : {doctors : DoctorResponseType[], totalFilteredDoctors : number} , message : string}>(`doctor/get-doctors-by-filter/?hospitalId=${hospitalId}&specializationId=${categoryId}&searchTerm=${searchTerm}&date=${date}&skip=${String(skip)}&take=${String(take)}&dateLoc=${dateLoc}`, 'GET');
};

