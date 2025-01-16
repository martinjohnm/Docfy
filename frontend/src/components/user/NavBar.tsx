
import { IoIosLogOut } from "react-icons/io";
import { useUserLogout } from "../../hooks/user/useUserLogout";
// import { useRecoilValue } from "recoil";
// import { userAtom } from "../../store/atoms/authState";
import { useNavigate } from "react-router-dom";



export const Navbar = () => {

    const logoutfn = useUserLogout()
    // const user  = useRecoilValue(userAtom)
    const navi = useNavigate()

    const logout = () => {
        logoutfn()
        navi("/login")
    }

    return <div className="bg-[#061e34] rounded-3xl w-full">
    <div className="md:grid md:grid-cols-12 w-full px-4 py-4 gap-2">
        <div className="col-span-3 flex items-center justify-center">
            <img className="h-14" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/07/logo.png" alt="" />
        </div>
        <div className="col-span-5 grid-cols-5 grid items-center justify-center text-white font-semibold font-mono text-lg">
            <div >
                Home
            </div>
            <div>
                Doctors
            </div>
            <div>
                Appointments
            </div>
            <div>
                Profile
            </div>
            <div>

            </div>
        </div>
        <div className="col-span-3 flex justify-between items-center gap-2">
            <button className="bg-slate-500 p-2 rounded-md hover:bg-white hover:text-black justify-start">Book an Appointment</button>
            <div className="px-10 cursor-pointer hover:text-red-900 text-red-700" onClick={logout}>
                <IoIosLogOut className="w-8 h-8"/>
            </div>
        </div>
    </div>
    
</div>
}