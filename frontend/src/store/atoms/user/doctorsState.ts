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

export const doctorSearchTermAtom = atom<string | null>({
  key: 'doctorSearchTermAtom',
  default: null
});