// recoil/authState.ts
import { atom, selectorFamily } from 'recoil';
import { SlotResponseType } from '../../../types/response.types';
import { isSameDay } from 'date-fns';

export const slotsByDoctorAtom = atom< SlotResponseType[] | null>({
  key: 'slotsByDoctorAtom',
  default: null
});


export const slotsByDoctorSelectedDate = atom< SlotResponseType[] | null>({
  key: 'slotsByDoctorSelectedDate',
  default: null
});


export const selectedAlreadyCreatedSlotDate = atom< SlotResponseType[] | null>({
  key: 'selectedAlreadyCreatedSlotDate',
  default: null
});


export const slotDaywiseAtom = atom<SlotResponseType[]>({
  key : "slotDaywiseAtom",
  default : []
})


// selectos 

export const daywiseSlot = selectorFamily({
  key : "daywiseSlot",
  get : (date : Date | null) => ({ get }) => {
    const slots = get(slotsByDoctorAtom)


    if (date) {
      return slots?.filter(((slot) => {
        isSameDay(slot.startTime, date)
     } ))
    } else {
      return []
    }

  }
})

