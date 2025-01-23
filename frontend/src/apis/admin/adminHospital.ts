import { HospitalResponseType } from '../../types/response.types';
import { HospitalAddInput, HospitalUpdateInput } from '../../types/zod.types';
import { adminApi } from '../../utils/apiClient/adminApiClient';



export const createHospitalAdmin = async (data : HospitalAddInput ) => {
    return adminApi< {success : boolean, data : { hospital : HospitalResponseType }, message : string} >("admin/hospital/create", "POST", data)
}

export const getHospitalsData = async () => {
  return adminApi<{ success : boolean,  data : { hospitals : HospitalResponseType[] } , message : string}>("admin/hospital/get-all", "GET")
};

export const getSingleHospitalData = async (id : string) => {
  return adminApi<{ success : boolean,  data : { hospital : HospitalResponseType } , message : string}>(`admin/hospital/get/${id}`, "GET")
};

export const updateHospital = async ({hospitalId, categoryIds} : {hospitalId : string, categoryIds : HospitalUpdateInput}) => {
  return adminApi<{ success : boolean,  data : { hospital : HospitalResponseType } , message : string}>(`admin/hospital/update-category/${hospitalId}`, "PUT", categoryIds)
};
