import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RecoilRoot, useSetRecoilState } from "recoil"
import { LoginPageUser } from "./pages/user/LoginPageUser"
import { GoogleCallBack } from "./pages/user/GoogleCallBack"
import { Suspense, useEffect } from "react"
import { fetchUserData } from "./apis/user/authApi"
import { UserProfilePage } from "./pages/user/UserProfilePage"
import { UserAuthProtector } from "./protected/UserAuthProtecter"
import { Loader } from "./components/user/home/Loader"
import { userAtom } from "./store/atoms/authState"
import { DashboardPageAdmin } from "./pages/admin/DashboardPageAdmin"
import { BookingsPageAdmin } from "./pages/admin/BookingsPageAdmin"
import { UsersPageAdmin } from "./pages/admin/UsersPageAdmin"
import { DoctorsPageAdmin } from "./pages/admin/DoctorsPageAdmin"
import { ReportsPageAdmin } from "./pages/admin/ReportsPageAdmin"
import { Home } from "./pages/user/home/Home"
import { Doctors } from "./pages/user/doctor/Doctors"
import { HomePageDoctor } from "./pages/doctor/Home.doctor/Home.Page.Doctor"
import { DoctorGoogleCallBack } from "./pages/doctor/DoctorGoogleCallBack"
import { LoginPageDoctor } from "./pages/doctor/LoginPageDoctor"
import { NotFoundPage } from "./pages/NotFoundPage"
import { ProfileDoctor } from "./pages/doctor/Profile.Doctor.tsx/Profile.Doctor"
import { HospitalsPageAdmin } from "./pages/admin/HospitalsPageAdmin"
import { DepartmentPageAdmin } from "./pages/admin/DepartmentsPageAdmin"
import { LocationsPageAdmin } from "./pages/admin/LocationsPageAdmin"
import { SingleHospitalPageAdmin } from "./pages/admin/SingleHospitalPageAdmin"

function App() {



  return (
  <RecoilRoot>
    <Suspense fallback={<Loader />}>
      <AuthApp />
    </Suspense>
  </RecoilRoot>)

}
const AuthApp = () => {
  const setUser = useSetRecoilState(userAtom);



  useEffect(() => {
    const getUserData = async () => {
      try {
        const fetchedData = await fetchUserData() ;        
        if (fetchedData.success) {
          setUser(fetchedData.data.user)
        };

        
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        setUser(null); // Clear user data if fetch fails
      }
    };

    getUserData();
  }, [setUser])

  return (
    <BrowserRouter>
      <Routes>
        {/* user pages */}
        <Route path="/" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
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
        <Route path="/doctor" element={<HomePageDoctor/>}/>
        <Route path="/doctor-login" element={<LoginPageDoctor/>}/>
        <Route path="/google-callback-doctor" element={<DoctorGoogleCallBack/>}/>
        <Route path="/doctor-profile" element={<ProfileDoctor/>}/>

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
)
}

export default App
