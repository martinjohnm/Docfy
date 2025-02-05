// recoil/authState.ts
import { atom } from 'recoil';
import { SlotResponseType } from '../../../types/response.types';

export const slotsByDoctorForUserAtom = atom< SlotResponseType[] | null>({
  key: 'slotsByDoctorForUserAtom',
  default: null
});


export const slotByDoctorForAday = atom<SlotResponseType[] | null>({
  key : "slotByDoctorForAday",
  default : null
})

