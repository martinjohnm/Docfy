import { useParams } from "react-router-dom";
import { useGetSlotDoctorWise } from "../../../hooks/doctor/useGetSlotDoctorWise";
import { useRecoilValue } from "recoil";
import { slotsByDoctorForUserAtom } from "../../../store/atoms/user/slotsByDoctorForUserAtom";
import { DatePickerUser } from "../../Common/Date.Picker.User";
import { useEffect, useState } from "react";
import { format, isSameDay } from "date-fns";
import { SlotResponseType } from "../../../types/response.types";




export const SingleDoctorSection = () => {

    const { id } = useParams();
    if (!id) {
        return <div>ID is required but not found.</div>;
    }

    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    const {doctor} = useGetSlotDoctorWise(id)
    const slotsByDoctor = useRecoilValue(slotsByDoctorForUserAtom)


    useEffect(() => {

    }, [slotsByDoctor])



    // calculate slots for selected day
    let slotsForSelectedDay : SlotResponseType[] | null = []
    
    if (slotsByDoctor && selectedDate) {
        slotsForSelectedDay =   slotsByDoctor.filter((date) =>  isSameDay(date.startTime, selectedDate
        ))
    }



    console.log(slotsForSelectedDay);
    


    return <div className="w-full">
    <div className="grid grid-cols-2 max-w-7xl container mx-auto min-h-96 rounded-xl bg-slate-200 p-2 gap-2">
        
        <div className="items-center">
            <p className="text-2xl md:text-4xl font-medium text-black"> Dr { doctor?.name}</p>
            <div className="mt-4">
                <p className="font-semibold text-lg">Specialization : {doctor?.specialization?.name}</p>
                <p className="font-semibold text-lg">Hospital : {doctor?.hospital?.name}</p>
            </div>
            <div className="mt-4">
                Select Slot
            </div>
            <div className="mt-4">
                <DatePickerUser onSelectedDateChANGE={(date : Date) => {setSelectedDate(date)}}/>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
            {slotsForSelectedDay.map((slot) => (
                <SingleSlot slot={slot}/>
            ))}
        </div>
    
    </div>

</div>
}

const SingleSlot = ({slot} : {slot : SlotResponseType}) => {
    return <div className=" w-28 h-11 items-center justify-center flex rounded-lg cursor-pointer text-black text-base font-bold border-2 border-green-800">
        {format(slot.startTime, "H:mm")} to {format(slot.endTime, "HH:mm")}
</div> 
}