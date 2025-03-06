import { atom } from "recoil";
import { UserResponseType } from "../../../types/response.types";






export const userssByAdminAtom = atom< UserResponseType[] | null>({
  key: 'userssByAdminAtom',
  default: null
});


export const usersskipPaginationAdmin = atom<number>({
    key : "usersskipPaginationAdmin",
    default : 0
  })
  
  export const userssTakePaginationAdmin = atom<number>({
    key : "userssTakePaginationAdmin",
    default : 10
  })
  
  export const totalNoOfuserssAdmin = atom<number>({
    key : "totalNoOfuserssAdmin",
    default : 0
  })
  
  export const totalNoOfuserssPagesAdmin = atom<number>({
    key : "totalNoOfuserssPagesAdmin",
    default : 0
  })
  
  export const selectedusersPageNumberAdmin = atom<number>({
    key : "selectedusersPageNumberAdmin",
    default : 1
  })