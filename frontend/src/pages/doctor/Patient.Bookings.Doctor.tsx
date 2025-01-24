

import { FullNavBarDocotor } from "../../components/doctor/FullNavbar.doctor"
import { ProfileContentDoctor } from "../../components/doctor/profile/Profile.Content.Doctor"
import { HomeFooter } from "../../components/user/home/Home.Footer"
import { HomeTermsCondition } from "../../components/user/home/Home.Terms.Conditions"



export const PatientBookingsDoctor = () => {
    return <div className="p-2">
        <div className="sticky top-0 z-40">
                    <FullNavBarDocotor page="patient-bookings"/>
                </div>
      
                <div className="py-4">
                    <ProfileContentDoctor/>
                </div>

                <div className="py-4">
                    <HomeFooter/>
                </div>
                <div className="">
                    <HomeTermsCondition/>
                </div>
    </div>
}