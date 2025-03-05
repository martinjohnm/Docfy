// import { useEffect } from "react";
// import { getSlotsForDoctorFordDay } from "../../apis/doctor/doctorSlotApis";



// export const useGetSlotsForDay = () => {
//     const [slots, setSlots] = useState< SlotResponseType[] | null>(null)
//         const [loading, setLoading] = useState<boolean>(true)
    
//         const setSlotsForDoctr = useSetRecoilState(slotsByDoctorAtom)
//         console.log("hai from useGetslots doctor");
        
    
//         useEffect(() => {
    
//             const getslots = async ( ) => {
//                 const slotsArr = await getSlotsForDoctorFordDay()
    
//                 if (slotsArr.success) {
    
                    
//                     setSlots(slotsArr.data.slots)
//                     setSlotsForDoctr(slotsArr.data.slots)
//                     setLoading(false)
//                 } else {
//                     setLoading(false)
//                 }
//             }
    
//             getslots()
    
//         }, [])
    
//         return {loading, slots}
// }