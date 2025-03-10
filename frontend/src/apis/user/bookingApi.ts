import { BookingResponseType, DoctorResponseType } from '../../types/response.types';
import { userApi } from '../../utils/apiClient/apiClient';

// Fetch protected data
export const createBooking = async ({slotId}: {slotId : string}) => {
  return userApi<{ success : boolean,  data : {booking : BookingResponseType, doctor : DoctorResponseType} , message : string }>(`booking/create/${slotId}`, 'POST');
};


export const getBookings = async ({skip, take} : {skip : number, take : number}) => {
  return userApi<{ success : boolean,  data : {bookings : BookingResponseType[], totalNoOfBookings : number} , message : string }>(`booking/get-all/?skip=${skip}&take=${take}`, 'GET');
};

export const getBookingsUpcoming = async ({skip, take} : {skip : number, take : number}) => {
  return userApi<{ success : boolean,  data : {bookings : BookingResponseType[], totalNoOfBookings : number} , message : string }>(`booking/get-all-upcoming/?skip=${skip}&take=${take}`, 'GET');
};
export const getBookingsCompleted = async ({skip, take} : {skip : number, take : number}) => {
  return userApi<{ success : boolean,  data : {bookings : BookingResponseType[], totalNoOfBookings : number} , message : string }>(`booking/get-all-completed/?skip=${skip}&take=${take}`, 'GET');
};
export const getBookingsCancelled = async ({skip, take} : {skip : number, take : number}) => {
  return userApi<{ success : boolean,  data : {bookings : BookingResponseType[], totalNoOfBookings : number} , message : string }>(`booking/get-all-cancelled/?skip=${skip}&take=${take}`, 'GET');
};


export const updateBookingTocancel = async (id : string) => {
  return userApi<{ success : boolean,  data : {booking : BookingResponseType, totalNoOfBookings : number} , message : string }>(`booking/cancel-booking/${id}`, 'PUT');
};




