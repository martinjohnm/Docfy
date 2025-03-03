// recoil/authState.ts
import { atom } from 'recoil';
import { CategoryResponseType } from '../../../types/response.types';

export const categoriesAtom = atom< CategoryResponseType[] | null>({
  key: 'categoriesAtom',
  default: null
});




// categoryId user currenly selected
export const categoryIdUserSelected = atom<string | null>({
  key : "categoryIdUserSelected",
  default : null
})

// categories for the currently selected hospitalId
export const categoriesForHospitalIdUserSelected = atom< CategoryResponseType[] | null>({
  key: 'categoriesForHospitalIdUserSelected',
  default: null
});
