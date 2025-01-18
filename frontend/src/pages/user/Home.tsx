

import { FullNavBarCommon } from "../../components/user/FullNavbarCommon"
import { HomeAppointmentScheduleCard } from "../../components/user/home/Home.Appointment.schedule.Card"
import { HomeCategoriesComp } from "../../components/user/home/Home.Categories.Comp"
import { HomeFooter } from "../../components/user/home/Home.Footer"
import { HomeMeetDoctors } from "../../components/user/home/Home.Meet.Doctors"
import { HomeStepsComponent } from "../../components/user/home/Home.Steps.Component"
import { HomeTermsCondition } from "../../components/user/home/Home.Terms.Conditions"
import { HomeTitleComponent } from "../../components/user/home/Home.Title.Component"
import { HomeWhyChoose } from "../../components/user/home/Home.Why.Choose"
import { HomeWhyHealthComponent } from "../../components/user/home/Home.Why.Health"



export const Home = () => {
 
    return <div className="p-4">
    
        <div className="sticky top-0 z-40">
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
        <div className="py-4">
            <HomeWhyHealthComponent/>
        </div>
        <div className="py-4">
            <HomeWhyChoose/>
        </div>
        <div className="py-4">
            <HomeMeetDoctors/>
        </div>
        <div className="py-4">
            <HomeFooter/>
        </div>
        <div className="">
            <HomeTermsCondition/>
        </div>


    </div>
}