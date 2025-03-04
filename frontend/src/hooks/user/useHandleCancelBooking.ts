import { useState } from "react"
import { updateBookingTocancel } from "../../apis/user/bookingApi"
import toast from "react-hot-toast"





export const useHandleCancelBooking = () => {

    const [loading, setLoading] = useState<boolean>(false)
    
  
    
    
    const cancelBooking = async(id : string) => {
        try {
            setLoading(true)    
            const canceledBooking = await updateBookingTocancel(id)
            if (canceledBooking.success) {
                toast.success(canceledBooking.message)
            } else {
                toast.error(canceledBooking.message)
            }
            setLoading(false)
        } catch(e) {
            setLoading(false)
        }
    }

    return {loading, cancelBooking}
}