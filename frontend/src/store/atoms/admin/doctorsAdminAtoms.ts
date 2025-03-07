import { atom } from "recoil";
import { DoctorResponseType } from "../../../types/response.types";






export const doctorsByAdminAtom = atom< DoctorResponseType[] | null>({
  key: 'doctorsByAdminAtom',
  default: null
});




export const doctorskipPaginationAdmin = atom<number>({
    key : "doctorskipPaginationAdmin",
    default : 0
  })
  
  export const doctorsTakePaginationAdmin = atom<number>({
    key : "doctorsTakePaginationAdmin",
    default : 10
  })
  
  export const totalNoOfdoctorsAdmin = atom<number>({
    key : "totalNoOfdoctorsAdmin",
    default : 0
  })
  
  export const totalNoOfDoctorsPagesAdmin = atom<number>({
    key : "totalNoOfDoctorsPagesAdmin",
    default : 0
  })
  
  export const selectedDoctorPageNumberAdmin = atom<number>({
    key : "selectedDoctorPageNumberAdmin",
    default : 1
  })