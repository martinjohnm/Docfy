import { BookingsFilter } from "./BookingsFilter"
import { BookingssNavbar } from "./BookingsNavBar"

export const Bookings = () => {
    return <div className="w-full h-full overflow-auto bg-slate-300">
        <div className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
            <BookingssNavbar/>
            <BookingsFilter/>
        </div>
 
        <div className=""></div>
    </div>
}

