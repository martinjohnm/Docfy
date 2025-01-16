import { useNavigate } from "react-router-dom";
import { removeToken } from "../../utils/tokenUtils";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../../store/atoms/authState";



export const useUserLogout = () =>{
    const navigate = useNavigate();
    const setUsr = useSetRecoilState(userAtom)
    const logout = () => {
        removeToken()
        setUsr(null)
        navigate('/login');
      };

    return logout
}