import { useParams } from "react-router-dom";
import { useGetSlotDoctorWise } from "../../../hooks/doctor/useGetSlotDoctorWise";
import { useRecoilValue } from "recoil";
import { slotsByDoctorForUserAtom } from "../../../store/atoms/user/slotsByDoctorForUserAtom";
import { DatePickerUser } from "../../Common/Date.Picker.User";
import { useEffect, useState } from "react";
import { format, formatDate, isAfter, isSameDay } from "date-fns";
import { SlotResponseType } from "../../../types/response.types";




export const SingleDoctorSection = () => {

    const { id } = useParams();
    if (!id) {
        return <div>ID is required but not found.</div>;
    }

    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [selectedSlot, setSelectedSlot] = useState<SlotResponseType | null>(null)
 
    console.log(selectedSlot);
    

    useEffect(() => {

    }, [selectedDate, selectedSlot])

    const {doctor, getslots} = useGetSlotDoctorWise(id)
    const slotsByDoctor = useRecoilValue(slotsByDoctorForUserAtom)


    useEffect(() => {

    }, [slotsByDoctor])




    // calculate slots for selected day
    let slotsForSelectedDay : SlotResponseType[] | null = []
    
    if (slotsByDoctor && selectedDate) {
        if (isSameDay(selectedDate, new Date())) {
     
            slotsForSelectedDay =   slotsByDoctor.filter((date) =>  isAfter(date.startTime, new Date()) && isSameDay(selectedDate, date.startTime)
        ) 
        } else {
    
            slotsForSelectedDay =   slotsByDoctor.filter((date) =>  isSameDay(date.startTime, selectedDate
            ))
        }

    }


    const reloadSlots = () => {
        getslots(id)
    }


    return <div className="w-full">
    <div className="md:grid md:grid-cols-2 max-w-7xl container mx-auto min-h-96 rounded-xl bg-slate-200 p-4 gap-4">
        
        <div className="items-center">
            <div className="w-full grid grid-cols-2 gap-2">
                <div>
                    <p className="text-2xl md:text-4xl font-medium text-black"> Dr { doctor?.name}</p>
                    <div className="mt-4">
                        <p className="font-semibold text-lg">Specialization : {doctor?.specialization?.name}</p>
                        <p className="font-semibold text-lg">Hospital : {doctor?.hospital?.name}</p>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-green-400 border-black border"></div>
                        <p>- Days with slots</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-blue-500 border-black border"></div>
                        <p>- Selected day</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-black border"></div>
                        <p>- Days without slot</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                Select Slot
            </div>
            <div className="mt-4">
                <DatePickerUser onSelectedDateChANGE={(date : Date) => {setSelectedDate(date)}}/>
            </div>
        </div>
        <div>
            <div className="py-2 justify-between flex p-4">
                <p className="text-lg font-semibold">Slots for {formatDate(selectedDate, "d:MM:yyyy")} </p>
                <button onClick={reloadSlots} className="bg-blue-500 text-xs text-white p-2 rounded-md">Reload</button>
            </div>
            <div >
                {slotsForSelectedDay.length == 0 ? (
                    <div>No slots for this day</div>
                ) : (
                    <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-2 mt-4">
                        {slotsForSelectedDay.map((slot) => (
                            <SingleSlot 
                            key={String(slot.startTime)} 
                            slot={slot} 
                            onClick={() => {
                                setSelectedSlot(slot)
                            }}
                            selectedSlot={selectedSlot}
                            />
                        ))}
                    </div>
                )}
               
            </div>
        </div>
    </div>

</div>
}

const SingleSlot = ({slot, onClick, selectedSlot} : {slot : SlotResponseType, onClick : any, selectedSlot : SlotResponseType | null}) => {
    return <button onClick={onClick} className={`w-28 h-11 items-center justify-center flex rounded-lg  text-black text-sm font-bold border border-green-600
    ${slot.status === "AVAILABLE" ? "cursor-pointer hover:bg-blue-500" : "bg-red-300 pointer-events-none"} ${selectedSlot?.id == slot.id ? "bg-blue-500" : ""}`}>
        {format(slot.startTime, "H:mm")} to {format(slot.endTime, "HH:mm")}
</button> 
}