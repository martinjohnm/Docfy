import { useRecoilState } from "recoil"
import { BookingTypeToFetch } from "../../../types/recoil/user/bookings.state.type"
import { selectedBookingstypeTofetchDoctor } from "../../../store/atoms/doctor/bookingsByDoctorAtom"
import { useGetBookingsForDoctor } from "../../../hooks/doctor/useGetBookingsForDoctor"





export const PatientsFilter = () => {


    return <div className="max-w-5xl container mx-auto backdrop-blur-sm py-2 flex">

            <Filter filter="upcoming"/>
            <Filter filter="completed"/>
            <Filter filter="all"/>
          
    </div>
}


const Filter = ({filter} : {filter : BookingTypeToFetch}) => {
    const [bookingFilter, setBookingFIlter] = useRecoilState(selectedBookingstypeTofetchDoctor)



    useGetBookingsForDoctor()
    
    const onFIlterChange = () => {
        setBookingFIlter(filter)
    }

    return <button onClick={onFIlterChange} className={`px-4 py-2 text-sm ${filter == bookingFilter ? "bg-blue-300": "bg-slate-200"}`}>
        {filter}
    </button>
}



