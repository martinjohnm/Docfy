import { useRecoilValue } from "recoil"
import { useGetBookings } from "../../../hooks/user/useGetBookings"
import { bookingsAtomUser, totalNoOfBookings } from "../../../store/atoms/user/bookingsAtomUser"
import { format } from "date-fns"
import { useState } from "react"






export const BookingsAllComponent = () => {



    const [skip, setSkip] = useState<number>(0)
    const [take, _setTake] = useState<number>(10)


    const {getBookingsFn} = useGetBookings({skip, take})


    const bookings = useRecoilValue(bookingsAtomUser)
    const totalNoOfBooking = useRecoilValue(totalNoOfBookings)

    const totalPages : number[] = []

    for (let i =0; i<totalNoOfBooking; i = i+10) {
        totalPages.push(i)
    }

    
    return <div className="w-full">
    

    
    
    


    <div className="max-w-5xl container mx-auto justify-center">
        <div className="py-2">
            {bookings?.map((booking) => (
                <div className="">
                    <div className="flex bg-slate-100 p-4 gap-2 rounded-lg">
                        <div className="bg-slate-200 rounded-md p-2 w-full flex gap-2">
                            <p className="font-semibold">{"Doctor :"}</p>
                            <p>{booking.doctor.name}</p>
                            
                        </div>
                        <div className="bg-slate-200 rounded-md p-2 justify-center items-center w-full flex gap-2">
                            <p className="font-semibold">{"Time : "}</p>
                            <p>{`${format(booking.startTime, "dd MMM yyy")}`}</p>
                            <div className="flex gap-2">
                                <p>{`${format(booking.startTime, "hh:mm a")}`}</p>
                                <p>To</p>
                                <p>{`${format(booking.endTime, "hh:mm a")}`}</p>
                            </div>
                            <p>{`${`(${booking.duration} mins`})`}</p>
                        </div>
                
                    </div>
                   
                </div>
                
            ))}
        
        </div>
    </div>

</div>
}


