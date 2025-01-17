
import { IoIosLogOut } from "react-icons/io";
import { useUserLogout } from "../../hooks/user/useUserLogout";
// import { useRecoilValue } from "recoil";
// import { userAtom } from "../../store/atoms/authState";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../store/atoms/authState";



export const Navbar = () => {

    const logoutfn = useUserLogout()
    const user = useRecoilValue(userAtom)
    // const user  = useRecoilValue(userAtom)
    const navi = useNavigate()

    const logout = () => {
        logoutfn()
        navi("/")
    }

    return <div>
                
                <div className="bg-[#061e34] rounded-3xl w-full hidden lg:block">
                <div className="md:grid md:grid-cols-12 w-full px-4 py-4 gap-2">
                    <div className="col-span-3 flex items-center justify-center">
                        <img className="h-14" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/07/logo.png" alt="" />
                    </div>
                    <div className="col-span-6 grid-cols-4 grid items-center justify-center text-white font-semibold font-mono text-lg">
                        <Link to={"/"} className="flex justify-center hover:text-slate-300 cursor-pointer">
                            Home
                        </Link>
                        <Link to={"/doctors"} className="flex justify-center hover:text-slate-300 cursor-pointer">
                            Doctors
                        </Link>
                        <Link to={"/bookings"} className="flex justify-center hover:text-slate-300 cursor-pointer">
                            Bookings
                        </Link>
                        <Link to={"/user-profile"} className="flex justify-center hover:text-slate-300 cursor-pointer">
                            Profile
                        </Link>
                     
                    </div>
                    <div className="col-span-3 flex justify-between items-center gap-2">
                        <button className="bg-slate-500 p-2 rounded-md hover:bg-white hover:text-black justify-start">Book an Appointment</button>
                        {user ? (
                            <div className="px-10 cursor-pointer hover:text-red-900 text-red-700" onClick={logout}>
                            <IoIosLogOut className="w-8 h-8"/>
                        </div>
                        ) : (
                            <Link to={"/login"} className="px-10 cursor-pointer font-semibold hover:text-green-600 text-green-500" >
                                Login
                            </Link>
                        )}
                        
                    </div>
                </div>
                
                </div>
</div>
}