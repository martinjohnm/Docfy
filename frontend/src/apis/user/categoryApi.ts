import { CategoryResponseType } from "../../types/response.types";
import { userApi } from "../../utils/apiClient/apiClient";







export const getAllCategoriesByHospitalId = async (hospitalId : string | null) => {

  if (hospitalId){
    return userApi<{ success : boolean,  data : {categories : CategoryResponseType[]} , message : string}>(`category/get-by-hospitalId/?hospitalId=${hospitalId}`, 'GET');
  } else {
    return userApi<{ success : boolean,  data : {categories : CategoryResponseType[]} , message : string}>(`category/get-by-hospitalId`, 'GET');
  }
};

export const getAllCategories = async () => {
  return userApi<{ success : boolean,  data : {categories : CategoryResponseType[]} , message : string}>(`category/get-categories`, 'GET');
};

