import { Doctors } from "../../components/admin/Doctors/Doctors"
import { SideBar } from "../../components/admin/SideBar"


export const DoctorsPageAdmin = () => {
    return <div className="h-screen">
                <div className="grid grid-cols-7 border-x">
                        <div className="col-span-1">
                            <SideBar name="Doctors"/>
                        </div>
                        <div className="col-span-6 h-screen">
                            <Doctors/>
                        </div>
                </div>
    </div>
}