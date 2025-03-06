import { atom } from "recoil";
import { BookingResponseType } from "../../../types/response.types";
import { BookingTypeToFetch } from "../../../types/recoil/user/bookings.state.type";






export const bookingsByAdminAtom = atom< BookingResponseType[] | null>({
  key: 'bookingsByAdminAtom',
  default: null
});


export const selectedBookingstypeTofetchAdmin = atom<BookingTypeToFetch>({
  key : "selectedBookingstypeTofetchAdmin",
  default : "upcoming"
})


export const bookingSkipPaginationAdmin = atom<number>({
    key : "bookingSkipPaginationAdmin",
    default : 0
  })
  
  export const bookingTakePaginationAdmin = atom<number>({
    key : "bookingTakePaginationAdmin",
    default : 10
  })
  
  export const totalNoOfBookingsAdmin = atom<number>({
    key : "totalNoOfBookingsAdmin",
    default : 0
  })
  
  export const totalNoOfBookingPagesAdmin = atom<number>({
    key : "totalNoOfBookingPagesAdmin",
    default : 0
  })
  
  export const selectedPageNumberAdmin = atom<number>({
    key : "selectedPageNumberAdmin",
    default : 1
  })