import { DoctorResponseType, SlotResponseType } from '../../types/response.types';
import { userApi } from '../../utils/apiClient/apiClient';

// Fetch protected data
export const getSlotsDoctorWise = async ({id}: {id : string}) => {
  return userApi<{ success : boolean,  data : {slots : SlotResponseType[], doctor : DoctorResponseType} , message : string }>(`slot/get-by-doctor/${id}`, 'GET');
};

