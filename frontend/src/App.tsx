import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { LoginPageUser } from "./pages/user/LoginPageUser"
import { GoogleCallBack } from "./pages/user/GoogleCallBack"
import React, { Suspense, useEffect } from "react"
import { fetchUserData } from "./apis/user/authApi"
import { UserProfilePage } from "./pages/user/UserProfilePage"
import { UserAuthProtector } from "./protected/UserAuthProtecter"
import { Loader } from "./components/user/home/Loader"
import { userAtom, userLoadingState } from "./store/atoms/authState"
import { DashboardPageAdmin } from "./pages/admin/DashboardPageAdmin"
import { BookingsPageAdmin } from "./pages/admin/BookingsPageAdmin"
import { UsersPageAdmin } from "./pages/admin/UsersPageAdmin"
import { DoctorsPageAdmin } from "./pages/admin/DoctorsPageAdmin"
import { ReportsPageAdmin } from "./pages/admin/ReportsPageAdmin"
import { Home } from "./pages/user/home/Home"
import { Doctors } from "./pages/user/doctor/Doctors"
import { DoctorGoogleCallBack } from "./pages/doctor/DoctorGoogleCallBack"
import { LoginPageDoctor } from "./pages/doctor/LoginPageDoctor"
import { NotFoundPage } from "./pages/NotFoundPage"
import { ProfileDoctor } from "./pages/doctor/Profile.Doctor"
import { HospitalsPageAdmin } from "./pages/admin/HospitalsPageAdmin"
import { DepartmentPageAdmin } from "./pages/admin/DepartmentsPageAdmin"
import { LocationsPageAdmin } from "./pages/admin/LocationsPageAdmin"
import { SingleHospitalPageAdmin } from "./pages/admin/SingleHospitalPageAdmin"
import { HomePageDoctor } from "./pages/doctor/Home.Page.Doctor"
import { PatientBookingsDoctor } from "./pages/doctor/Patient.Bookings.Doctor"
import { fetchDoctorData } from "./apis/doctor/doctorAuthApis"
import { doctorAtom, doctorLoadingState } from "./store/atoms/authDoctorState"
import { DoctorAuthProtector } from "./protected/DoctorAuthProtector"
import { SignUpPageDoctor } from "./pages/doctor/SignUpPageDoctor"
import { SlotsDoctor } from "./pages/doctor/Slots.Doctor"
import { SingleDoctor } from "./pages/user/doctor/SingleDoctor"
import { Toaster } from "react-hot-toast";
import { Bookings } from "./pages/user/bookings/Bookings"
import { LoginPageAdmin } from "./pages/admin/LoginPageAdmin"
import { AdminAuthProtector } from "./protected/AdminAuthProtector"
import { adminAtom, adminLoadingState, adminTokenAtom, isAdminAuthenticated } from "./store/atoms/admin/adminAuthState"
import { fetchAdmin } from "./apis/admin/adminLoginApi"


function App() {



  return (
  <RecoilRoot>
    <Suspense fallback={<Loader />}>
      <InitialLoader>
        <Toaster position="top-right"/>
        <AuthApp />
      </InitialLoader>
    </Suspense>
  </RecoilRoot>)

}


const AuthApp = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* user pages */}
        <Route path="/" element={<UserAuthProtector><Home/></UserAuthProtector>}/>
        <Route path="/doctors" element={<UserAuthProtector><Doctors/></UserAuthProtector>}/>
        <Route path="/doctors/:id" element={<UserAuthProtector><SingleDoctor/></UserAuthProtector>}/>
        <Route path="/bookings" element={<UserAuthProtector><Bookings/></UserAuthProtector>}/>
        <Route path="/login" element={<LoginPageUser/>}/>
        <Route path="/google-callback" element={<GoogleCallBack/>}/>
        <Route path="/user-profile" element={<UserAuthProtector><UserProfilePage/></UserAuthProtector>}/>
    
        {/* admin pages */}
        <Route path="/admin-dashboard" element={<AdminAuthProtector><DashboardPageAdmin/></AdminAuthProtector>}/>
        <Route path="/admin-bookings" element={<AdminAuthProtector><BookingsPageAdmin/></AdminAuthProtector>}/>
        <Route path="/admin-users" element={<AdminAuthProtector><UsersPageAdmin/></AdminAuthProtector>}/>
        <Route path="/admin-doctors" element={<AdminAuthProtector><DoctorsPageAdmin/></AdminAuthProtector>}/>
        <Route path="/admin-reports" element={<AdminAuthProtector><ReportsPageAdmin/></AdminAuthProtector>}/>
        <Route path="/admin-hospitals" element={<AdminAuthProtector><HospitalsPageAdmin/></AdminAuthProtector>}/>
        <Route path="/admin-hospitals/:id" element={<AdminAuthProtector><SingleHospitalPageAdmin/></AdminAuthProtector>}/>
        <Route path="/admin-departments" element={<AdminAuthProtector><DepartmentPageAdmin/></AdminAuthProtector>}/>
        <Route path="/admin-locations" element={<AdminAuthProtector><LocationsPageAdmin/></AdminAuthProtector>}/>
        <Route path="/admin-login" element={<LoginPageAdmin/>}/>


        {/* doctor pages */}
        <Route path="/doctor" element={<DoctorAuthProtector><HomePageDoctor/></DoctorAuthProtector>}/>
        <Route path="/doctor-login" element={<LoginPageDoctor/>}/>
        <Route path="/doctor-signup" element={<SignUpPageDoctor/>}/>
        <Route path="/google-callback-doctor" element={<DoctorGoogleCallBack/>}/>
        <Route path="/doctor-profile" element={<DoctorAuthProtector><ProfileDoctor/></DoctorAuthProtector>}/>
        <Route path="/doctor-slots" element={<DoctorAuthProtector><SlotsDoctor/></DoctorAuthProtector>}/>
        <Route path="/patient-bookings" element={<DoctorAuthProtector><PatientBookingsDoctor/></DoctorAuthProtector>}/>

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
)
}


const  InitialLoader  = ({ children } : {children : React.ReactNode}) =>  {

  const userLoading = useRecoilValue(userLoadingState)
  const doctorLoading = useRecoilValue(doctorLoadingState)
  const adminLoading = useRecoilValue(adminLoadingState)

  const setUser = useSetRecoilState(userAtom);
  const setDoctor = useSetRecoilState(doctorAtom)

  const setUserLoading = useSetRecoilState(userLoadingState)
  const setDoctorLoading = useSetRecoilState(doctorLoadingState)
  const setAdminLoading = useSetRecoilState(adminLoadingState)


  const setAdminAtom = useSetRecoilState(adminAtom)
  const setAdminBool = useSetRecoilState(isAdminAuthenticated)
  const setAdminToken = useSetRecoilState(adminTokenAtom)


  useEffect(() => {
    const getUserData = async () => {
      try {

        setUserLoading(true)
        const fetchedData = await fetchUserData() ;        
        if (fetchedData.success) {
          setUser({
            isAuthenticated : true,
            user : fetchedData.data.user,
            token : ""
          })
        };

      } catch (error) {
        setUser({
          isAuthenticated : false,
          user : null,
          token : null
        }); // Clear user data if fetch fails
      } finally {
        setUserLoading(false)
      }
    };

    const getDoctorData = async () => {
      try {
        setDoctorLoading(true)
        const fetchedData = await fetchDoctorData() ;     
           
        if (fetchedData.success) {
          setDoctor({
            isAuthenticated : true,
            doctor : fetchedData.data.doctor,
            token : ""
          })
        };

        
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        setDoctor({
          isAuthenticated : false,
          doctor : null,
          token : null
        }); // Clear user data if fetch fails
      } finally {
         setDoctorLoading(false)
      }
    };


    const getAdminData = async () => {
      try {
        setAdminLoading(true)
        const fetchedData = await fetchAdmin() ;    
        

           
        if (fetchedData.success) {
   
          setAdminAtom(fetchedData.data.admin)
          setAdminToken(fetchedData.data.adminToken)
          setAdminBool(true)
        };

        
      } catch (error) {
        setAdminAtom(null)
        setAdminToken(null)
        setAdminBool(false)
      } finally {
         setAdminLoading(false)
      }
    };

    

    getUserData();
    getDoctorData()
    getAdminData()
  }, [])


  if (userLoading || doctorLoading || adminLoading) {
    return <div>Loading...</div>;
  }

  

  return <>{children}</>;
}

export default App
