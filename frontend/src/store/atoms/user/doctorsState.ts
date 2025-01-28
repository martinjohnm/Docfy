import { atom } from "recoil";
import { DoctorResponseType } from "../../../types/response.types";












export const allDoctorsAtom = atom<DoctorResponseType[] | null>({
  key: 'allDoctorsAtom',
  default: null
});