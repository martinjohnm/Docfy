import { useEffect } from "react"
import { useRecoilState, useSetRecoilState } from "recoil";
import { userAtom, userLoadingState } from "../../store/atoms/authState";
import { fetchUserData } from "../../apis/user/authApi";





export const useGetUserData = () => {

    const setUserLoading = useSetRecoilState(userLoadingState)
    const [user, setUser] = useRecoilState(userAtom);


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


    useEffect(() => {
        getUserData()
    },[user])
}