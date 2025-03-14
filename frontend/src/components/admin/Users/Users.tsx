import { UserFilter } from "./UserFilter"
import { UsersComponentAdmin } from "./Users.component.admin"
import { UsersNavbar } from "./UsersNavbar"


export const Users = () => {
    return <div className="w-full h-full overflow-auto bg-slate-300">
            <div className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
                <UsersNavbar/>
                <UserFilter/>
            </div>
     
              <div className="p-2">
                    <UsersComponentAdmin/>
                </div>
        </div>
}