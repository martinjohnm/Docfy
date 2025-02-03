// recoil/authState.ts
import { atom } from 'recoil';
import { SlotResponseType } from '../../../types/response.types';

export const slotsByDoctorAtom = atom< SlotResponseType[] | null>({
  key: 'slotsByDoctorAtom',
  default: null
});

