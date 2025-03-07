import { useEffect } from "react"
import { useRecoilState, useSetRecoilState } from "recoil";
import { doctorAtom, doctorLoadingState } from "../../store/atoms/authDoctorState";
import { fetchDoctorData } from "../../apis/doctor/doctorAuthApis";



export const useGetDoctorData = () => {

    const [doctor, setDoctor] = useRecoilState(doctorAtom)

    const setDoctorLoading = useSetRecoilState(doctorLoadingState)


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
    

    useEffect(() => {
        getDoctorData()
    },[doctor])
}