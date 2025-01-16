import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/tokenUtils";




export const GoogleCallBack = () => {
    const navigate = useNavigate();

  useEffect(() => {
    // Extract token and user info from URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    // const email = params.get('email');
    // const setAuth = useSetRecoilState(authState);
    

    if (token) {
        // Save token to localStorage or cookies
        setToken(token)

        // set authState in recoil
 

        // Redirect to the home page or dashboard
        navigate('/');
    }
  }, [navigate]);

  return <div>Logging in...</div>;
}