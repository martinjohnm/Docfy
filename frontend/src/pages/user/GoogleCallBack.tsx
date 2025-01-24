import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/tokenUtils";
import { userAtom } from "../../store/atoms/authState";
import { useSetRecoilState } from "recoil";




export const GoogleCallBack = () => {
    const navigate = useNavigate();
    const userState = useSetRecoilState(userAtom)

    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
  
  
      if (token) {
          // Save token to localStorage or cookies
          setToken(token)
          userState({
            isAuthenticated : true,
            user : null,
            token
          })
  
          // Redirect to the home page or dashboard
          navigate('/');
      }
    }, [navigate]);
  
    return <div>Logging in...</div>;
}