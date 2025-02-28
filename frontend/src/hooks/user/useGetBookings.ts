






import { useEffect, useState } from "react"
import { BookingResponseType } from "../../types/response.types"
import { getBookings } from "../../apis/user/bookingApi"
import { useSetRecoilState } from "recoil"
import { bookingsAtomUser, totalNoOfBookings } from "../../store/atoms/user/bookingsAtomUser"



export const useGetBookings = ({skip, take} : {skip : number, take : number}) =>{
    
    const [bookings, setbookings] = useState<BookingResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const setBookingsState = useSetRecoilState(bookingsAtomUser)
    const setTotalBookings = useSetRecoilState(totalNoOfBookings)
    
    useEffect(() => {

        getBookingsFn({skip, take})

    }, [])


    const getBookingsFn = async ({skip, take} : {skip : number, take : number})  => {

        try {
                setLoading(true)
                const booking = await getBookings({skip, take})
                if (booking.success) {
                    setbookings(booking.data.bookings)
                    setBookingsState(booking.data.bookings)
                    setTotalBookings(booking.data.totalNoOfBookings)
                    setLoading(false)
                } else {
                    
                    setLoading(false)
                }
                
        } catch(e) {
            setLoading(false)
        }
    }

   

    return {loading, bookings, getBookingsFn}
}