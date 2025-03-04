import { BookingResponseType } from '../../types/response.types';
import { doctorApi } from '../../utils/apiClient/doctorapiClient';




export const fetchAllBookingsDoctor = async ({skip, take} : {skip : number, take : number}) => {
  return doctorApi<{ success : boolean,  data : {bookings : BookingResponseType[], totalNoOfBookings : number} , message : string}>(`doctor/booking/get-all-bookings/?skip=${skip}&take=${take}`, "GET")
};

export const fetchUpcomingBookingsDoctor = async ({skip, take} : {skip : number, take : number}) => {
  return doctorApi<{ success : boolean,  data : {bookings : BookingResponseType[], totalNoOfBookings : number} , message : string}>(`doctor/booking/get-upcoming-bookings/?skip=${skip}&take=${take}`, "GET")
}

;export const fetchCompletedBookingsDoctor = async ({skip, take} : {skip : number, take : number}) => {
  return doctorApi<{ success : boolean,  data : {bookings : BookingResponseType[], totalNoOfBookings : number} , message : string}>(`doctor/booking/get-completed-bookings/?skip=${skip}&take=${take}`, "GET")
};
