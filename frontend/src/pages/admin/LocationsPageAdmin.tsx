import { Locations } from "../../components/admin/Locations/Locations"
import { SideBar } from "../../components/admin/SideBar"



export const LocationsPageAdmin = () => {
    return <div className="h-screen">
                        <div className="grid grid-cols-7">
                            <div className="col-span-1">
                                <SideBar name="Locations"/>
                            </div>
                            <div className="col-span-6 h-screen">
                                <Locations/>
                            </div>
                        </div>
            </div>
}