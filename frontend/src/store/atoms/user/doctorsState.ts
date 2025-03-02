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