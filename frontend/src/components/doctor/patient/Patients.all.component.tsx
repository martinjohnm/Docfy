import { useRecoilState, useRecoilValue } from "recoil"
import { format } from "date-fns"
import { bookingsByDoctorAtom, bookingTakePaginationDoctor, selectedPageNumberDoctor, totalNoOfBookingPagesDoctor, totalNoOfBookingsDoctor } from "../../../store/atoms/doctor/bookingsByDoctorAtom"
import { useGetNextPageBookingsDoctor } from "../../../hooks/doctor/useGetNextPageBookingsDoctor"





export const PatientsAllComponent = () => {


    useGetNextPageBookingsDoctor()

    const totalNoOfBooking = useRecoilValue(totalNoOfBookingsDoctor)
    const filterNoOfRecords = useRecoilValue(bookingTakePaginationDoctor)
    const [totalNoOfPages, setTotalNoOfPages] = useRecoilState(totalNoOfBookingPagesDoctor)
    const [selectedPageNo, setSelectedPageNo] = useRecoilState(selectedPageNumberDoctor)
    const bookings = useRecoilValue(bookingsByDoctorAtom)
    

    
    if (totalNoOfBooking %filterNoOfRecords == 0){
        setTotalNoOfPages(Math.floor(totalNoOfBooking/filterNoOfRecords))

    } else {
        setTotalNoOfPages(Math.floor(totalNoOfBooking/filterNoOfRecords)+1)

    }

    
    const prevPage = () => {
        if (selectedPageNo > 1) {
        
            setSelectedPageNo(selectedPageNo-1)
            
        }
    }


    const nextPage = () => {
        if (selectedPageNo < totalNoOfPages) {
          
            setSelectedPageNo(selectedPageNo+1)
        }
    }


    return <div className="w-full">
    

    <div className="max-w-5xl container mx-auto justify-center min-h-[700px] w-full bg-slate-100 rounded-lg">
        <div className="py-1 w-full h-full">
            {totalNoOfBooking!= 0 ? (
                bookings?.map((booking) => (
                    <div key={booking.id} className="">
                        <div className="flex bg-slate-100 p-4 gap-2 rounded-lg">
                            <div className="bg-slate-200 rounded-md p-2 w-full flex gap-2">
                                <p className="font-semibold">{"Patient :"}</p>
                                <p>{booking.patient.name}</p>
                                
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
                    
                ))
            ) : (
                <div className="w-full h-full justify-center items-center flex">
                    <div className="justify-center items-center flex w-full h-full p-16">
                        <p className="">No Such Bookings availbale.. Try changing filters..</p>
                    </div>
                </div>
            )}
            
            
        
        </div>
       
        
    </div>

    <div className={`flex justify-center items-center gap-2 py-1 ${bookings?.length ==0 ? "hidden" : "visible"}`}>
                <button onClick={prevPage} className={`px-2 text-sm items-center justify-center flex bg-blue-100 hover:bg-blue-300 rounded-md
                    ${selectedPageNo == 1 ? "cursor-not-allowed" : ""}`}>
                    <p>{"<<prev"}</p>
                </button>
                {Array.from({ length: totalNoOfPages }).map((_, index) => (
                    <button onClick={() => {setSelectedPageNo(index + 1)}}  key={index+1} className={`border rounded  w-8 h-8 justify-center hover:bg-blue-400 items-center flex ${selectedPageNo == (index + 1) ? "bg-blue-300" : "bg-gray-200"} 
                    `}>
                    {index + 1}
                    </button>
                ))}
                <button onClick={nextPage} className={`px-2 text-sm items-center justify-center flex bg-blue-100 hover:bg-blue-300 rounded-md
                    ${selectedPageNo == totalNoOfPages ? "cursor-not-allowed" : ""}`}>
                    <p>{"next>>"}</p>
                </button>
    </div>

</div>
}


