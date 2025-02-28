



import { atom } from 'recoil';
import { BookingResponseType } from '../../../types/response.types';
import { BookingTypeToFetch } from '../../../types/recoil/user/bookings.state.type';

export const bookingsAtomUser = atom< BookingResponseType[] | null>({
  key: 'bookingsAtomUser',
  default: null
});

export const selectedBookingstypeTofetch = atom<BookingTypeToFetch>({
  key : "selectedBookingstypeTofetch",
  default : "upcoming"
})

export const bookingSkipPagination = atom<number>({
  key : "bookingSkipPagination",
  default : 0
})

export const bookingTakePagination = atom<number>({
  key : "bookingTakePagination",
  default : 10
})

export const totalNoOfBookings = atom<number>({
  key : "totalNoOfBookings",
  default : 0
})

export const totalNoOfBookingPages = atom<number>({
  key : "totalNoOfBookingPages",
  default : 0
})

export const selectedPageNumber = atom<number>({
  key : "selectedPageNumber",
  default : 1
})






