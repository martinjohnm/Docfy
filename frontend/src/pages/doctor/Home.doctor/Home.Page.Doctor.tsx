import { FullNavBarDocotor } from "../../../components/doctor/FullNavbar.doctor"
import { HomeContentDoctor } from "../../../components/doctor/home/Home.Content.Doctor"
import { HomeFooter } from "../../../components/user/home/Home.Footer"
import { HomeTermsCondition } from "../../../components/user/home/Home.Terms.Conditions"



export const HomePageDoctor = () => {

 
    return <div className="p-2">
    
        <div className="sticky top-0 z-40">
            <FullNavBarDocotor page=""/>
        </div>
        <div className="py-4">
            <HomeContentDoctor/>
        </div>
        <div className="py-4">
            <HomeFooter/>
        </div>
        <div className="">
            <HomeTermsCondition/>
        </div>


    </div>
}