


import { BookingResponseType } from '../../types/response.types';
import { adminApi } from '../../utils/apiClient/adminApiClient';



export const getAdminBookingsAll = async ( {skip, take} : {skip : number, take : number} ) => {
    return adminApi< {success : boolean, data : { bookings : BookingResponseType[], totalNoOfBookings : number }, message : string} >(`admin/booking/get-all/?skip=${skip}&take=${take}`, "GET")
}



export const getAdminBookingsUpcoming = async ( {skip, take} : {skip : number, take : number} ) => {
    return adminApi< {success : boolean, data : { bookings : BookingResponseType[], totalNoOfBookings : number }, message : string} >(`admin/booking/get-upcoming/?skip=${skip}&take=${take}`, "GET")
}

export const getAdminBookingsCompleted = async ( {skip, take} : {skip : number, take : number} ) => {
    return adminApi< {success : boolean, data : { bookings : BookingResponseType[], totalNoOfBookings : number }, message : string} >(`admin/booking/get-completed/?skip=${skip}&take=${take}`, "GET")
}


export const getAdminBookingsCanceled = async ( {skip, take} : {skip : number, take : number} ) => {
    return adminApi< {success : boolean, data : { bookings : BookingResponseType[], totalNoOfBookings : number }, message : string} >(`admin/booking/get-canceled/?skip=${skip}&take=${take}`, "GET")
}

