import { Bookings } from "../../components/admin/Bookings/Bookings"
import { SideBar } from "../../components/admin/SideBar"



export const BookingsPageAdmin = () => {
    return <div className="h-screen">
                    <div className="grid grid-cols-7">
                        <div className="col-span-1">
                            <SideBar name="Bookings"/>
                        </div>
                        <div className="col-span-6 h-screen">
                            <Bookings/>
                        </div>
                    </div>
        </div>
}