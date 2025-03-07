import { Link } from "react-router-dom"

export type SelectedAdminSidebarType = "Dashboard" | "Doctors" | "Users" | "Bookings" | "Reports" | "Departments" | "Hospitals" | "Locations"
type LinkType = "admin-dashboard" | "admin-bookings" | "admin-users" | "admin-doctors" | "admin-reports" | "admin-departments" | "admin-hospitals" | "admin-locations"

export const SideBar = ({name} : {name : SelectedAdminSidebarType}) => {
    return <div className="overflow-y-auto overflow-x-hidden h-full bg-[#061e34]">
        <div className="p-4 h-full w-full justify-center">
            <div className="flex justify-center items-center w-ful text-white gap-2 py-4">
                <span className="self-center text-xl font-semibold whitespace-nowrap">Docdy</span>
            </div>
            {/* <SideComp title="Dashboard" isSelected={(name === "Dashboard") ? true : false} link={"admin-dashboard"}/> */}
            <SideComp title="Doctors" isSelected={(name === "Doctors") ? true : false} link={"admin-doctors"}/>
            <SideComp title="Users" isSelected={(name === "Users") ? true : false} link={"admin-users"}/>
            <SideComp title="Bookings" isSelected={(name === "Bookings") ? true : false} link={"admin-bookings"}/>
            <SideComp title="Departments" isSelected={(name === "Departments") ? true : false} link={"admin-departments"}/>
            <SideComp title="Hospitals" isSelected={(name === "Hospitals") ? true : false} link={"admin-hospitals"}/>
            <SideComp title="Locations" isSelected={(name === "Locations") ? true : false} link={"admin-locations"}/>
            {/* <SideComp title="Reports" isSelected={(name === "Reports") ? true : false} link={"admin-reports"}/> */}
        </div>
        
        
    </div>
}

export const SideComp = ({title, isSelected, link} : {title : string, isSelected? : boolean, link : LinkType}) => {
    return <Link to={`/${link}`}>
    <div className={`px-2 py-2 flex justify-start items-start rounded-md mt-2 text-white ${isSelected ? "bg-slate-500" : ""}`}>
        {title}
    </div>
    </Link> 
}