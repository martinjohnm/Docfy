



import { atom } from "recoil";
import { AdminResponseType } from "../../../types/response.types";



export const adminAtom = atom<AdminResponseType | null>({
  key: 'adminAtom',
  default: null
});



export const isAdminAuthenticated = atom<boolean>({
    key: 'isAdminAuthenticated',
    default: false
  });
  
  
  
export const adminTokenAtom = atom<string | null>({
    key: 'adminTokenAtom',
    default: null
  });


  export const adminLoadingState = atom({
    key: 'adminLoadingState',
    default: true, // True while fetching data
  });
  
  
  