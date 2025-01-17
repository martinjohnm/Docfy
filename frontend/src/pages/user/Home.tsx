

import { FullNavBarCommon } from "../../components/user/FullNavbarCommon"
import { HomeAppointmentScheduleCard } from "../../components/user/home/Home.Appointment.schedule.Card"
import { HomeCategoriesComp } from "../../components/user/home/Home.Categories.Comp"
import { HomeStepsComponent } from "../../components/user/home/Home.Steps.Component"
import { HomeTitleComponent } from "../../components/user/home/Home.Title.Component"



export const Home = () => {
 
    return <div className="p-4">
    
        <div className="">
            <FullNavBarCommon/>
        </div>

        <div className="py-4">
            <HomeTitleComponent/>
        </div>
        <div className="py-4">
            <HomeAppointmentScheduleCard/>
        </div>
        <div className="py-4">
            <HomeStepsComponent/>
        </div>
        <div className="py-4">
            <HomeCategoriesComp/>
        </div>
    </div>
}