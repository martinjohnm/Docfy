import { FullNavBarDocotor } from "../../components/doctor/FullNavbar.doctor"
import { SlotsComponent } from "../../components/slots/Slots.Component"
import { HomeFooter } from "../../components/user/home/Home.Footer"
import { HomeTermsCondition } from "../../components/user/home/Home.Terms.Conditions"



export const SlotsDoctor = () => {
    return <div className="p-2">
        <div className="sticky top-0 z-40">
                    <FullNavBarDocotor page="doctor-slots"/>
                </div>
      
                <div className="py-4">
                    <SlotsComponent/>
                </div>

                <div className="py-4">
                    <HomeFooter/>
                </div>
                <div className="">
                    <HomeTermsCondition/>
                </div>
    </div>
}