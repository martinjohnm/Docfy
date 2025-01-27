import { HospitalResponseType } from '../../types/response.types';
import { doctorApi } from '../../utils/apiClient/doctorapiClient';




export const fetchAllHospitalsDoctor = async () => {
  return doctorApi<{ success : boolean,  data : {hospitals : HospitalResponseType[]} , message : string}>("doctor/hospital/get-all", "GET")
};



export const fetchSingleHospitalsDoctor = async (id : string) => {
  return doctorApi<{ success : boolean,  data : {hospital : HospitalResponseType} , message : string}>(`doctor/hospital/get/${id}`, "GET")
};
