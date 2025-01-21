import { Departments } from "../../components/admin/Departments/Departments"
import { SideBar } from "../../components/admin/SideBar"


export const DepartmentPageAdmin = () => {
    return <div className="h-screen">
                    <div className="grid grid-cols-7">
                        <div className="col-span-1">
                            <SideBar name="Departments"/>
                        </div>
                        <div className="col-span-6 h-screen">
                            <Departments/>
                        </div>
                    </div>
        </div>
}