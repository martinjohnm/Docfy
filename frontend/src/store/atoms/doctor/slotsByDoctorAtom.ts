// recoil/authState.ts
import { atom } from 'recoil';
import { SlotResponseType } from '../../../types/response.types';

export const slotsByDoctorAtom = atom< SlotResponseType[] | null>({
  key: 'slotsByDoctorAtom',
  default: null
});


export const slotsByDoctorSelectedDate = atom< SlotResponseType[] | null>({
  key: 'slotsByDoctorSelectedDate',
  default: null
});


export const selectedAlreadyCreatedSlotDate = atom< SlotResponseType[] | null>({
  key: 'selectedAlreadyCreatedSlotDate',
  default: null
});

