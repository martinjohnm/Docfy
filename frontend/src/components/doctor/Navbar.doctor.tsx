
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { NavbarTypesDoctor } from "./FullNavbar.doctor";
import { doctorAtom } from "../../store/atoms/authDoctorState";
import { useDoctorLogout } from "../../hooks/doctor/useDoctorLogout";



export const NavbarDoctor = ({page} : {page : NavbarTypesDoctor}) => {

    const doctor = useRecoilValue(doctorAtom)
    const navi = useNavigate()
    const {loading, logoutDoctor} = useDoctorLogout()
    const logout = () => {
        logoutDoctor()
        navi("/doctor-login")
    }

    return <div>
                
                <div className="bg-[#061e34] rounded-3xl w-full hidden lg:block">
                <div className="md:grid md:grid-cols-12 w-full px-4 py-4 gap-2">
                    <div className="col-span-3 flex items-center justify-center">
                        <img className="h-14" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/07/logo.png" alt="" />
                    </div>
                    <div className="col-span-6 grid-cols-4 grid items-center justify-center text-white font-semibold font-mono text-lg">
                        <Link to={"/doctor"} className={`flex justify-center hover:text-slate-300 cursor-pointer ${page == '' ? "text-green-400" : ""}`}>
                            Home
                        </Link>
                        <Link to={"/doctor-slots"} className={`flex justify-center hover:text-slate-300 cursor-pointer ${page == 'doctor-slots' ? "text-green-400" : ""}`}>
                            Slots
                        </Link>
                        <Link to={"/patient-bookings"} className={`flex justify-center hover:text-slate-300 cursor-pointer ${page == 'patient-bookings' ? "text-green-400" : ""}`}>
                            Patients
                        </Link>
                        <Link to={"/doctor-profile"} className={`flex justify-center hover:text-slate-300 cursor-pointer ${page == 'doctor-profile' ? "text-green-400" : ""}`}>
                            Profile
                        </Link>
                        
                     
                    </div>
                    <div className="col-span-3 flex justify-between items-center gap-2">
                    <button onClick={() => {navi("/login")}} className="bg-slate-500 p-2 rounded-md hover:bg-white hover:text-black justify-start">Login as Patient</button>

                        {doctor ? (
                            <div className="px-10 cursor-pointer hover:text-blue-900" onClick={logout}>
                            <button className="bg-blue-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-900">
                                {loading ? <LogoutSpinner/> : "Logout"}
                            </button>
                        </div>
                        ) : (
                            <Link to={"/doctor-login"} className="px-10 cursor-pointer font-semibold hover:text-green-600 text-green-500" >
                                Login
                            </Link>
                        )}
                        
                    </div>
                </div>
                
                </div>
</div>
}


export const LogoutSpinner = () => {
    return <div>
                <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                Loading...
                </button>
            
    </div>
}