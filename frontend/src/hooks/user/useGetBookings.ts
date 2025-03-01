
import { useEffect, useState } from "react"
import { BookingResponseType } from "../../types/response.types"
import { getBookings, getBookingsCompleted, getBookingsUpcoming } from "../../apis/user/bookingApi"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { bookingsAtomUser, selectedBookingstypeTofetch, selectedPageNumber, totalNoOfBookings } from "../../store/atoms/user/bookingsAtomUser"
import { BookingTypeToFetch } from "../../types/recoil/user/bookings.state.type"



export const useGetBookings = () =>{
    
    const [bookings, setbookings] = useState<BookingResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const setBookingsState = useSetRecoilState(bookingsAtomUser)
    const setTotalBookings = useSetRecoilState(totalNoOfBookings)

    const bookingFilter = useRecoilValue(selectedBookingstypeTofetch)

    const setSelectedPageNo = useSetRecoilState(selectedPageNumber)
    
    useEffect(() => {

        getBookingsFn({bookingFilter})
        setSelectedPageNo(1)

    }, [bookingFilter])

    const getBookingsFn = async ({bookingFilter} : {bookingFilter : BookingTypeToFetch})  => {
                
        try {
                setLoading(true)

                const skip = 0
                const take = 10
              
                if (bookingFilter == "all"){

                    const booking = await getBookings({skip, take})
                    if (booking.success) {
                        
                        setbookings(booking.data.bookings)
                        setBookingsState(booking.data.bookings)
                        setTotalBookings(booking.data.totalNoOfBookings)
                        setLoading(false)
                    } else {
                        
                        setLoading(false)
                    }

                } else if (bookingFilter == "upcoming") {
                    const booking = await getBookingsUpcoming({skip, take})
                    if (booking.success) {
                        setbookings(booking.data.bookings)
                        setBookingsState(booking.data.bookings)
                        setTotalBookings(booking.data.totalNoOfBookings)
                        setLoading(false)
                    } else {
                        
                        setLoading(false)
                    }
                } else if (bookingFilter == "completed") {
                    const booking = await getBookingsCompleted({skip, take})
                    if (booking.success) {
                        setbookings(booking.data.bookings)
                        setBookingsState(booking.data.bookings)
                        setTotalBookings(booking.data.totalNoOfBookings)
                        setLoading(false)
                    } else {
                        
                        setLoading(false)
                    }
                }
                
        } catch(e) {
            setLoading(false)
        }
    }

    const nextPageFn = async({bookingFilter, selectedPageNo} : {bookingFilter : BookingTypeToFetch, selectedPageNo : number}) => {
        try {
            setLoading(true)

            const skip = selectedPageNo-1
            const take = 10
          
            if (bookingFilter == "all"){

                const booking = await getBookings({skip, take})
                if (booking.success) {
                    
                    setbookings(booking.data.bookings)
                    setBookingsState(booking.data.bookings)
                    setTotalBookings(booking.data.totalNoOfBookings)
                    setLoading(false)
                } else {
                    
                    setLoading(false)
                }

            } else if (bookingFilter == "upcoming") {
                const booking = await getBookingsUpcoming({skip, take})
                if (booking.success) {
                    setbookings(booking.data.bookings)
                    setBookingsState(booking.data.bookings)
                    setTotalBookings(booking.data.totalNoOfBookings)
                    setLoading(false)
                } else {
                    
                    setLoading(false)
                }
            } else if (bookingFilter == "completed") {
                const booking = await getBookingsCompleted({skip, take})
                if (booking.success) {
                    setbookings(booking.data.bookings)
                    setBookingsState(booking.data.bookings)
                    setTotalBookings(booking.data.totalNoOfBookings)
                    setLoading(false)
                } else {
                    
                    setLoading(false)
                }
            }
            
    } catch(e) {
        setLoading(false)
    }
    }

   

    return {loading, bookings, getBookingsFn, nextPageFn}
}