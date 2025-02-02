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

function App() {



  return (
  <RecoilRoot>
    <Suspense fallback={<Loader />}>
      <InitialLoader>
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
        <Route path="/login" element={<LoginPageUser/>}/>
        <Route path="/google-callback" element={<GoogleCallBack/>}/>
        <Route path="/user-profile" element={<UserAuthProtector><UserProfilePage/></UserAuthProtector>}/>
    
        {/* admin pages */}
        <Route path="/admin-dashboard" element={<DashboardPageAdmin/>}/>
        <Route path="/admin-bookings" element={<BookingsPageAdmin/>}/>
        <Route path="/admin-users" element={<UsersPageAdmin/>}/>
        <Route path="/admin-doctors" element={<DoctorsPageAdmin/>}/>
        <Route path="/admin-reports" element={<ReportsPageAdmin/>}/>
        <Route path="/admin-hospitals" element={<HospitalsPageAdmin/>}/>
        <Route path="/admin-hospitals/:id" element={<SingleHospitalPageAdmin/>}/>
        <Route path="/admin-departments" element={<DepartmentPageAdmin/>}/>
        <Route path="/admin-locations" element={<LocationsPageAdmin/>}/>


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
  const setUser = useSetRecoilState(userAtom);
  const setDoctor = useSetRecoilState(doctorAtom)

  const setUserLoading = useSetRecoilState(userLoadingState)
  const setDoctorLoading = useSetRecoilState(doctorLoadingState)

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

    

    getUserData();
    getDoctorData()
  }, [setUser])


  if (userLoading || doctorLoading) {
    return <div>Loading...</div>;
  }

  

  return <>{children}</>;
}

export default App
