import { useRecoilState } from "recoil"
import { breakEndTimeToSlotAtom, breakstartTimeToSlotAtom, endTimeToSlotAtom, startTimeToSlotAtom } from "../../store/atoms/doctor/slotsByDoctorAtom"
import toast from "react-hot-toast"






    const [startTime, setStartTime] = useRecoilState(startTimeToSlotAtom)
    const [endTime, setEndTime] = useRecoilState(endTimeToSlotAtom)
    const [breakEndTime, setBreakendTime] = useRecoilState(breakEndTimeToSlotAtom)
    const [breakStartTime, setBreakStartTime] = useRecoilState(breakstartTimeToSlotAtom)
    

    export function Slotchecker() {
        if (!(startTime < breakStartTime && breakStartTime < breakEndTime && breakEndTime < endTime)) {

            setStartTime(9)
            setEndTime(17)
            setBreakStartTime(12)
            setBreakendTime(13)
            toast.error("Invalid slot duration")
        }
    }

   