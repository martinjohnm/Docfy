// recoil/authState.ts
import { atom, selectorFamily } from 'recoil';
import { SlotResponseType } from '../../../types/response.types';
import { isSameDay } from 'date-fns';
import { localSlotType } from '../../../types/recoil/doctor/slot.helpers.types';

export const slotsByDoctorAtom = atom< SlotResponseType[] | null>({
  key: 'slotsByDoctorAtom',
  default: null
});


export const slotsByDoctorSelectedDate = atom< SlotResponseType[] | null>({
  key: 'slotsByDoctorSelectedDate',
  default: null
});



export const selectedDatesToCreateSlotsAtom = atom< Date[]>({
  key: 'selectedDatesToCreateSlotsAtom',
  default: []
});

export const createdSlotsAtom = atom<localSlotType[]>({
  key : "createdSlotsAtom",
  default : []
})











export const startTimeToSlotAtom = atom<number>({
  key : "startTimeToSlotAtom",
  default : 9
})

export const endTimeToSlotAtom = atom<number>({
  key : "endTimeToSlotAtom",
  default : 17
})


export const breakstartTimeToSlotAtom = atom<number>({
  key : "breakstartTimeToSlotAtom",
  default : 12
})

export const breakEndTimeToSlotAtom = atom<number>({
  key : "breakEndTimeToSlotAtom",
  default : 13
})



export const slotDurationAtom = atom<number>({
  key : "slotDurationAtom",
  default : 15
})








 

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

