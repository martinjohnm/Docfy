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

export const hospitalIdUserSelected = atom<string | null>({
  key: 'hospitalIdUserSelected',
  default: null
});

export const hospitalsForCategoryIdUserSelected = atom< HospitalResponseType[] | null>({
  key: 'hospitalsForCategoryIdUserSelected',
  default: null
});

// export const doctorHospitalsForCategories = atom< HospitalResponseType[] | null>({
//   key: 'doctorHospitalsForCategories',
//   default: null
// });

// export const doctorHospitalFilterAtom = atom<string | null>({
//   key: 'doctorHospitalFilterAtom',
//   default: null
// });

// export const doctorCategoryFilterAtom = atom<string | null>({
//   key: 'doctorCategoryFilterAtom',
//   default: null
// });

