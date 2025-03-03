import { HospitalResponseType } from '../../types/response.types';
import { userApi } from '../../utils/apiClient/apiClient';



// Fetch doctors
export const getHospitals = async () => {
  return userApi<{ success : boolean,  data : {hospitals : HospitalResponseType[]} , message : string}>('hospital/get-all', 'GET');
};


export const getHospitalDepatments = async (hospitalId : string) => {
  return userApi<{ success : boolean,  data : {hospitals : HospitalResponseType[]} , message : string}>('department/get-all', 'GET');
};


export const getHospitalsByCategoryId = async (categoryId : string | null) => {

  if (categoryId){
      return userApi<{ success : boolean,  data : {hospitals : HospitalResponseType[]} , message : string}>(`hospital/get-by-categoryId/?categoryId=${categoryId}`, 'GET');
    } else {
      return userApi<{ success : boolean,  data : {hospitals : HospitalResponseType[]} , message : string}>(`hospital/get-by-categoryId`, 'GET');
    }
};

