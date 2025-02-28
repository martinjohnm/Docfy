import { useRecoilState } from "recoil"
import { BookingTypeToFetch } from "../../../types/recoil/user/bookings.state.type"
import { selectedBookingstypeTofetch } from "../../../store/atoms/user/bookingsAtomUser"





export const BookingsFilter = () => {

    return <div className="max-w-5xl container mx-auto backdrop-blur-sm py-2 flex">

            <Filter filter="upcoming"/>
            <Filter filter="completed"/>
            <Filter filter="canceled"/>
            <Filter filter="active"/>
            <Filter filter="datewise"/>
            <Filter filter="monthwise"/>
          
    </div>
}


const Filter = ({filter} : {filter : BookingTypeToFetch}) => {
    const [bookingfilter, setBookingFIlter] = useRecoilState(selectedBookingstypeTofetch)

    return <button onClick={() => setBookingFIlter(filter)} className={`px-4 py-2 ${filter == bookingfilter ? "bg-blue-300": "bg-slate-200"}`}>
        {filter}
    </button>
}



