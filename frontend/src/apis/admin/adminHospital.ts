import { HospitalAddInput } from '../../types/zod.types';
import { adminApi } from '../../utils/apiClient/adminApiClient';



export const createHospitalAdmin = async (data : HospitalAddInput ) => {
    return adminApi< {success : boolean, data : { hospital : HospitalAddInput }, message : string} >("admin/hospital/create", "POST", data)
}

export const getHospitalsData = async () => {
  return adminApi<{ success : boolean,  data : { hospitals : HospitalAddInput[] } , message : string}>("admin/hospital/get-all", "GET")
};
