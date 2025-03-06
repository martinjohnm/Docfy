import { DoctorFilter } from "./DoctorFilter"
import { DoctorsComponentAdmin } from "./Doctors.component.admin"
import { DoctorsNavbar } from "./DoctorsNavBar"




export const Doctors = () => {
    return <div className="w-full h-full overflow-auto bg-slate-300">
        <div className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
            <DoctorsNavbar/>
            <DoctorFilter/>
        </div>
 
        <div className="p-2">
            <DoctorsComponentAdmin/>
        </div>
    </div>
}

