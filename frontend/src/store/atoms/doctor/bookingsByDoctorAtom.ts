// recoil/authState.ts
import { atom } from 'recoil';
import { BookingResponseType } from '../../../types/response.types';
import { BookingTypeToFetch } from '../../../types/recoil/user/bookings.state.type';

export const bookingsByDoctorAtom = atom< BookingResponseType[] | null>({
  key: 'bookingsByDoctorAtom',
  default: null
});



export const selectedBookingstypeTofetchDoctor = atom<BookingTypeToFetch>({
  key : "selectedBookingstypeTofetchDoctor",
  default : "upcoming"
})

export const bookingSkipPaginationDoctor = atom<number>({
  key : "bookingSkipPaginationDoctor",
  default : 0
})

export const bookingTakePaginationDoctor = atom<number>({
  key : "bookingTakePaginationDoctor",
  default : 10
})

export const totalNoOfBookingsDoctor = atom<number>({
  key : "totalNoOfBookingsDoctor",
  default : 0
})

export const totalNoOfBookingPagesDoctor = atom<number>({
  key : "totalNoOfBookingPagesDoctor",
  default : 0
})

export const selectedPageNumberDoctor = atom<number>({
  key : "selectedPageNumberDoctor",
  default : 1
})
