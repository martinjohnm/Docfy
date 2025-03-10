import { HospitalResponseType, SlotResponseType } from '../../types/response.types';
import { localSlotType } from '../../types/zod.types';
import { doctorApi } from '../../utils/apiClient/doctorapiClient';




export const fetchAllHospitalsDoctor = async () => {
  return doctorApi<{ success : boolean,  data : {hospitals : HospitalResponseType[]} , message : string}>("doctor/hospital/get-all", "GET")
};



export const createSlots = async ({slotsToCreate, dates } : {slotsToCreate : localSlotType[], dates : string[]}) => {
  return doctorApi<{ success : boolean,  data : {slots : SlotResponseType[]} , message : string}>(`doctor/slot/create`, "POST", {slotsToCreate, dates})
};


export const deleteSlotById = async (id : string) => {
  return doctorApi<{ success : boolean,  data : {slots : SlotResponseType[]} , message : string}>(`doctor/slot/delete-slot-by-id/${id}`, "DELETE")
};
export const getSlotsForDoctor = async () => {
  return doctorApi<{ success : boolean,  data : {slots : SlotResponseType[]} , message : string}>(`doctor/slot/get-slots-doctor`, "GET")
};

export const getSlotsForDoctorFordDay = async (date : string) => {
  return doctorApi<{ success : boolean,  data : {slots : SlotResponseType[]} , message : string}>(`doctor/slot/get-slots-doctor-for-day/?date=${date}`, "GET")
};

