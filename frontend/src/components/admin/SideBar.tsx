import { Link } from "react-router-dom"
import { useAdminLogout } from "../../hooks/admin/auth/useAdminLogout"
import { useState } from "react"

export type SelectedAdminSidebarType = "Dashboard" | "Doctors" | "Users" | "Bookings" | "Reports" | "Departments" | "Hospitals" | "Locations"
type LinkType = "admin-dashboard" | "admin-bookings" | "admin-users" | "admin-doctors" | "admin-reports" | "admin-departments" | "admin-hospitals" | "admin-locations"

export const SideBar = ({name} : {name : SelectedAdminSidebarType}) => {

    const [deleteToggle, setDeleteToggle] = useState<boolean>(false)

    const toggleDeleteCOnfirmation = () => {
        setDeleteToggle(c => !c)
    }
    const {adminLogoutFn} = useAdminLogout()

    
    const handleLogout  = () => {
        adminLogoutFn()
    }

    return <div className="overflow-y-auto overflow-x-hidden h-full bg-[#061e34]">
        <div className="p-4 h-full w-full justify-center">
            <div className="flex justify-center items-center w-ful text-white gap-2 py-4">
                <span className="self-center text-xl font-semibold whitespace-nowrap">Docdy</span>
            </div>
            <SideComp title="Dashboard" isSelected={(name === "Dashboard") ? true : false} link={"admin-dashboard"}/>
            <SideComp title="Doctors" isSelected={(name === "Doctors") ? true : false} link={"admin-doctors"}/>
            <SideComp title="Users" isSelected={(name === "Users") ? true : false} link={"admin-users"}/>
            <SideComp title="Bookings" isSelected={(name === "Bookings") ? true : false} link={"admin-bookings"}/>
            <SideComp title="Departments" isSelected={(name === "Departments") ? true : false} link={"admin-departments"}/>
            <SideComp title="Hospitals" isSelected={(name === "Hospitals") ? true : false} link={"admin-hospitals"}/>
            <SideComp title="Locations" isSelected={(name === "Locations") ? true : false} link={"admin-locations"}/>
            {/* <SideComp title="Reports" isSelected={(name === "Reports") ? true : false} link={"admin-reports"}/> */}
           <div className="mt-10 px-2">
            <button onClick={() => setDeleteToggle(c => !c)} className={`px-2 py-2 flex justify-start items-start rounded-md mt-2 text-white bg-red-500`}>
                    Logout
                </button>                       
           </div>
        </div>

                <div className={`absolute top-0 bg-opacity-65 left-0 z-50 w-screen  h-screen bg-slate-300 ${!deleteToggle ? "hidden" : ""} flex justify-center p-4`}>
                        <div className="items-center justify-center flex">
                            <div className="bg-opacity-85 rounded-2xl bg-slate-600 w-80 h-96 items-center justify-center flex">
                                <div>
                                    <div className="w-full justify-between items-end flex p-2 text-white">
                                        <div className="font-bold text-lg">
                                            <p>Logout</p>
                                        </div>
                                        <div className="justify-between">
                                            <button onClick={toggleDeleteCOnfirmation} className="bg-red-500 hover:bg-red-700 text-white p-1 rounded-xl font-medium text-sm">Close</button>
                                        </div>
                                    </div>
                                    <div className="w-full justify-center items-center flex p-2 text-white">
                                        <div>
                                            <p>Are You want to Logout</p>
                                            
                                        </div>
                                    </div>
        
                                    <div className="w-full justify-between items-center flex p-2 text-white gap-1">
                                        <button onClick={toggleDeleteCOnfirmation} className="p-4 bg-red-400">Cancel</button>
                                        <button onClick={handleLogout} className="p-4 bg-green-400">Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
     
        
    </div>
}

const SideComp = ({title, isSelected, link} : {title : string, isSelected? : boolean, link : LinkType}) => {
    return <Link to={`/${link}`}>
    <div className={`px-2 py-2 flex justify-start items-start rounded-md mt-2 text-white ${isSelected ? "bg-slate-500" : ""}`}>
        {title}
    </div>
    </Link> 
}

