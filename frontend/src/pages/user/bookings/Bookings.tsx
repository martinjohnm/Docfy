import { BookingsAllComponent } from "../../../components/user/bookings/bookings.all.component"
import { BookingsFilter } from "../../../components/user/bookings/bookings.filter"
import { FullNavBarCommon } from "../../../components/user/FullNavbarCommon"
import { HomeFooter } from "../../../components/user/home/Home.Footer"
import { HomeTermsCondition } from "../../../components/user/home/Home.Terms.Conditions"




export const Bookings = () => {


    return <div className="p-2">
    
        <div className="sticky top-0 z-40">
            <FullNavBarCommon page="bookings"/>
            <BookingsFilter/>
        </div>

        <div className="py-4">
            <BookingsAllComponent/>
        </div>

        <div className="py-4">
            <HomeFooter/>
        </div>
        <div className="">
            <HomeTermsCondition/>
        </div>


    </div>
}