import { DoctorsAllComponent } from "../../../components/user/doctor/Doctors.All.Component"
import { FullNavBarCommon } from "../../../components/user/FullNavbarCommon"
import { HomeFooter } from "../../../components/user/home/Home.Footer"
import { HomeTermsCondition } from "../../../components/user/home/Home.Terms.Conditions"
import { DoctorFilter } from "./doctorFilter"




export const Doctors = () => {
 
    return <div className="p-2">
    
        <div className="sticky top-0 z-40">
            <FullNavBarCommon page="doctors"/>
            <DoctorFilter/>
        </div>

        
    

        <div className="py-4">
            <DoctorsAllComponent/>
        </div>
        
        <div className="py-4">
            <HomeFooter/>
        </div>
        <div className="">
            <HomeTermsCondition/>
        </div>


    </div>
}