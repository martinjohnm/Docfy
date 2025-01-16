import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/user/Home"
import { RecoilRoot, useSetRecoilState } from "recoil"
import { LoginPageUser } from "./pages/user/LoginPageUser"
import { GoogleCallBack } from "./pages/user/GoogleCallBack"
import { Suspense, useEffect } from "react"
import { fetchUserData } from "./apis/authApi"
import { UserProfilePage } from "./pages/user/UserProfilePage"
import { UserAuthProtector } from "./protected/UserAuthProtecter"
import { Loader } from "./components/user/home/Loader"
import { userAtom } from "./store/atoms/authState"

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
        <Route path="/" element={<UserAuthProtector><Home/></UserAuthProtector>}/>
        <Route path="/login" element={<LoginPageUser/>}/>
        <Route path="/google-callback" element={<GoogleCallBack/>}/>
        <Route path="/user-profile" element={<UserAuthProtector><UserProfilePage/></UserAuthProtector>}/>
      </Routes>
    </BrowserRouter>
)
}

export default App
