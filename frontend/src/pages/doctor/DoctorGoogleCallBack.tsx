import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setDoctorToken } from "../../utils/tokenUtils";
import { useSetRecoilState } from "recoil";
import { doctorAtom } from "../../store/atoms/authDoctorState";




export const DoctorGoogleCallBack = () => {
  const navigate = useNavigate();
  const doctorState = useSetRecoilState(doctorAtom)
  
  

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');


    if (token) {
        // Save token to localStorage or cookies
        setDoctorToken(token)
        doctorState({
          isAuthenticated : true,
          doctor : null,
          token
        })

        // Redirect to the home page or dashboard
        navigate('/doctor');
    }
  }, [navigate]);

  return <div>Logging in...</div>;
}