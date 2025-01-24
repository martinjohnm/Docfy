import { removeToken } from "../../utils/tokenUtils";
import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { userAtom } from "../../store/atoms/authState";



export const useUserLogout = () =>{
    const [loading, setLoading] = useState<boolean>(false)
    const userState = useSetRecoilState(userAtom)
    
    const logoutUser = async ( ) => {
        setLoading(true)
        try {
              removeToken()
              userState({
                isAuthenticated : false,
                user : null,
                token : null
              })
              setLoading(false)
        } catch(e) {
            setLoading(false)
        }
    }


    return {loading, logoutUser}
}