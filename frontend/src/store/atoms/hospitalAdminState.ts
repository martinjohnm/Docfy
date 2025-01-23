// recoil/authState.ts
import { atom } from 'recoil';
import { HospitalUpdateInput } from '../../types/zod.types';

export const singleHospitalAtom = atom< HospitalUpdateInput | null>({
  key: 'singleHospitalAtom',
  default: null
});

