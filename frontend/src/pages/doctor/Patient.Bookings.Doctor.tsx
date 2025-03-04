

import { FullNavBarDocotor } from "../../components/doctor/FullNavbar.doctor"
import { PatientsFilter } from "../../components/doctor/patient/Patient.filter"
import { PatientsAllComponent } from "../../components/doctor/patient/Patients.all.component"
import { HomeFooter } from "../../components/user/home/Home.Footer"
import { HomeTermsCondition } from "../../components/user/home/Home.Terms.Conditions"



export const PatientBookingsDoctor = () => {
    return <div className="p-2">
        <div className="sticky top-0 z-40">
                    <FullNavBarDocotor page="patient-bookings"/>
                    <PatientsFilter/>
                
                </div>
      
                <div className="py-4">
                    <PatientsAllComponent/>
                </div>

                <div className="py-4">
                    <HomeFooter/>
                </div>
                <div className="">
                    <HomeTermsCondition/>
                </div>
    </div>
}