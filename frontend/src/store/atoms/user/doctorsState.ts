import { atom } from "recoil";
import { DoctorResponseType } from "../../../types/response.types";












export const allDoctorsAtom = atom<DoctorResponseType[] | null>({
  key: 'allDoctorsAtom',
  default: null
});


export const filteredDoctorsAtom = atom<DoctorResponseType[] | null>({
  key: 'filteredDoctorsAtom',
  default: null
});



// doctor filters 
export const doctorSearchTermAtom = atom<string | null>({
  key: 'doctorSearchTermAtom',
  default: null
});

export const isDoctorDateToggleOpen = atom<boolean>({
  key: 'isDoctorDateToggleOpen',
  default: false
});

export const selectedDateForFilter = atom<Date | null>({
  key: 'selectedDateForFilter',
  default: null
});


// pagination
export const filteredDoctorStartOfPage = atom<number>({
  key: 'filteredDoctorStartOfPage',
  default: 0
});
export const filteredDoctorPageNoofRecords = atom<number>({
  key: 'filteredDoctorPageNoofRecords',
  default: 8
});

export const filteredDoctorsTotalPages = atom<number>({
  key: 'filteredDoctorsTotalPages',
  default: 0
});

export const filteredDoctorTotalRecords = atom<number>({
  key: 'filteredDoctorTotalRecords',
  default: 0
});

