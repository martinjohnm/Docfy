// recoil/authState.ts
import { atom } from 'recoil';
import { HospitalUpdateInput } from '../../../types/zod.types';
import { HospitalResponseType } from '../../../types/response.types';

export const hospitalsAllUser = atom< HospitalUpdateInput | null>({
  key: 'hospitalsAllUser',
  default: null
});


export const doctorAllHospitalsForReactselect = atom<HospitalResponseType[] | null>({
  key: 'doctorAllHospitalsForReactselect',
  default: null
});

export const doctorHospitalFilterAtom = atom<string | null>({
  key: 'doctorHospitalFilterAtom',
  default: null
});

export const doctorCategoryFilterAtom = atom<string | null>({
  key: 'doctorCategoryFilterAtom',
  default: null
});

