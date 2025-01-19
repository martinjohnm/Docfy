import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setDoctorToken, setToken } from "../../utils/tokenUtils";




export const DoctorGoogleCallBack = () => {
    const navigate = useNavigate();

  useEffect(() => {
    // Extract token and user info from URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    // const email = params.get('email');
    // const setAuth = useSetRecoilState(authState);
    

    if (token) {
        // Save token to localStorage or cookies
        setDoctorToken(token)

        // set authState in recoil
 

        // Redirect to the home page or dashboard
        navigate('/doctor');
    }
  }, [navigate]);

  return <div>Logging in...</div>;
}