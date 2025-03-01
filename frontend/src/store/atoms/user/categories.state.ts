// recoil/authState.ts
import { atom } from 'recoil';
import { CategoryResponseType } from '../../../types/response.types';

export const categoriesAtom = atom< CategoryResponseType[] | null>({
  key: 'categoriesAtom',
  default: null
});


export const categoriesByHospitalIdAtom = atom< CategoryResponseType[] | null>({
  key: 'categoriesByHospitalIdAtom',
  default: null
});

