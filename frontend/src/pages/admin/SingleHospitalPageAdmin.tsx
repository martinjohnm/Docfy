import { SingleHospital } from "../../components/admin/Hospitals/SingleHospital"
import { SideBar } from "../../components/admin/SideBar"



export const SingleHospitalPageAdmin = () =>{
    return <div className="h-screen">
                        <div className="grid grid-cols-7">
                            <div className="col-span-1">
                                <SideBar name="Hospitals"/>
                            </div>
                            <div className="col-span-6 h-screen">
                                <SingleHospital/>
                            </div>
                        </div>
            </div>
}