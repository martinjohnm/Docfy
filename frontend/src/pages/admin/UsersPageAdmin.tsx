import { SideBar } from "../../components/admin/SideBar"
import { Users } from "../../components/admin/Users/Users"


export const UsersPageAdmin = () => {
    return <div className="h-screen">
                    <div className="grid grid-cols-7">
                        <div className="col-span-1">
                            <SideBar name="Users"/>
                        </div>
                        <div className="col-span-6 h-screen">
                            <Users/>
                        </div>
                    </div>
        </div>
}