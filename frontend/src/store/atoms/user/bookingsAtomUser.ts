



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

export const totalNoOfBookings = atom<number>({
  key : "totalNoOfBookings",
  default : 0
})



