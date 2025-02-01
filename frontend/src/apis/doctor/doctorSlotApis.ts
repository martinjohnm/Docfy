import { HospitalResponseType } from '../../types/response.types';
import { SlotsCreateInput } from '../../types/zod.types';
import { doctorApi } from '../../utils/apiClient/doctorapiClient';




export const fetchAllHospitalsDoctor = async () => {
  return doctorApi<{ success : boolean,  data : {hospitals : HospitalResponseType[]} , message : string}>("doctor/hospital/get-all", "GET")
};



export const createSlots = async (postInputs : SlotsCreateInput) => {
  return doctorApi<{ success : boolean,  data : {hospital : HospitalResponseType} , message : string}>(`doctor/slot/create`, "POST", postInputs)
};
