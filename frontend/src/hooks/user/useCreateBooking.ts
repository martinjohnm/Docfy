






import { useEffect, useState } from "react"
import { BookingResponseType } from "../../types/response.types"
import { createBooking } from "../../apis/user/bookingApi"
import toast from "react-hot-toast"



export const useCreateBooking = () =>{
    
    const [bookings, setbookings] = useState<BookingResponseType | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    
    useEffect(() => {


    }, [bookings])


    const createBookingFn = async ( slotId : string)  => {

        try {
                setLoading(true)
                const booking = await createBooking({slotId})
                if (booking.success) {
                    setbookings(booking.data.booking)
                    // setSlots(slot.data.slots)
                    toast.success("Booking created!");
                    setLoading(false)
                    return booking
                } else {
                    toast.error("Booking failed!")
                    setLoading(false)
                    return null
                }
                
        } catch(e) {
            setLoading(false)
            return null
        }
    }

   

    return {loading, bookings, createBookingFn}
}