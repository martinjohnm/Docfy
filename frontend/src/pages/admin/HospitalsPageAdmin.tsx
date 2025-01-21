import { Hospitals } from "../../components/admin/Hospitals/Hospitals"
import { SideBar } from "../../components/admin/SideBar"


export const HospitalsPageAdmin = () => {
    return <div className="h-screen">
                    <div className="grid grid-cols-7">
                        <div className="col-span-1">
                            <SideBar name="Hospitals"/>
                        </div>
                        <div className="col-span-6 h-screen">
                            <Hospitals/>
                        </div>
                    </div>
        </div>
}