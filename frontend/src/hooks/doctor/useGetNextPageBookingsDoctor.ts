import { useEffect, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { bookingsByDoctorAtom, selectedBookingstypeTofetchDoctor, selectedPageNumberDoctor, totalNoOfBookingsDoctor } from "../../store/atoms/doctor/bookingsByDoctorAtom"
import { BookingTypeToFetch } from "../../types/recoil/user/bookings.state.type"
import { fetchAllBookingsDoctor, fetchCompletedBookingsDoctor, fetchUpcomingBookingsDoctor } from "../../apis/doctor/doctorBookingApi"




export const useGetNextPageBookingsDoctor = () => {
        const [loading, setLoading] = useState<boolean>(true)
    
        const setBookingsForDoctor = useSetRecoilState(bookingsByDoctorAtom)
        const bookingFilter = useRecoilValue(selectedBookingstypeTofetchDoctor)
        const setTotalBookings = useSetRecoilState(totalNoOfBookingsDoctor)
        const selectedPageNo = useRecoilValue(selectedPageNumberDoctor)
        
        
        useEffect(() => {
            
            nextPageFn({bookingFilter, selectedPageNo})
            
        }, [selectedPageNo])
        
        
        const nextPageFn = async({bookingFilter, selectedPageNo} : {bookingFilter : BookingTypeToFetch, selectedPageNo : number}) => {
            try {
                setLoading(true)
    
                const skip = selectedPageNo-1
                const take = 10
                
                if (bookingFilter == "all"){
    
                    const booking = await fetchAllBookingsDoctor({skip, take})
                    if (booking.success) {
                        
                        setBookingsForDoctor(booking.data.bookings)
                        setTotalBookings(booking.data.totalNoOfBookings)
                        setLoading(false)
                    } else {
                        
                        setLoading(false)
                    }
    
                } else if (bookingFilter == "upcoming") {
                    const booking = await fetchUpcomingBookingsDoctor({skip, take})
                    if (booking.success) {
                        setBookingsForDoctor(booking.data.bookings)
                        setTotalBookings(booking.data.totalNoOfBookings)
                        setLoading(false)
                    } else {
                        
                        setLoading(false)
                    }
                } else if (bookingFilter == "completed") {
                    const booking = await fetchCompletedBookingsDoctor({skip, take})
                    if (booking.success) {
                        setBookingsForDoctor(booking.data.bookings)
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
    
        return {loading, nextPageFn}
}