import { useEffect, useState } from "react";
import { MultipleDateSelector } from "../Common/Date.Picker";
import { TimeSelector } from "../Common/Time.Selector";
import { DurationSelector } from "../Common/Duration.selector";
import { useRecoilState, useRecoilValue } from "recoil";
import { breakEndTimeToSlotAtom, breakstartTimeToSlotAtom, endTimeToSlotAtom, slotDurationAtom, slotsByDoctorAtom, startTimeToSlotAtom } from "../../store/atoms/doctor/slotsByDoctorAtom";
import { format, formatDate, isSameDay } from "date-fns";
import { SingleSlot } from "../user/doctor/Single.Doctor.Section";
import { SlotResponseType } from "../../types/response.types";
import { useDeleteSlotById } from "../../hooks/doctor/useDeleteSLotById";
import { useReloadSlotForDoctor } from "../../hooks/doctor/useReloadSlotForDoctor";
import { useCreateSlots } from "../../store/hooks/slots/useCreateSlots";
import { useSlotUpdate } from "../../hooks/doctor/useSlotUpdate";



export const SlotsComponent = () => {

    useCreateSlots()
    const {updatedSlot} = useSlotUpdate()
    const {deleteSlotByIdFn} = useDeleteSlotById()
    const {reloadSlotsForDoctor} =  useReloadSlotForDoctor()


    const slots = useRecoilValue(slotsByDoctorAtom)
    const [alreadySlotedDate, SetAlreadySlotedDate] = useState<string | null>(null)


    const [isToggle, setIsToggle] = useState<boolean>(false)
    const [deleteToggle, setDeleteToggle] = useState<boolean>(false)
    const [selectedSLotToDelete, setSelectedSLotToDelete] = useState<SlotResponseType | null>(null)



    const [startTime, setStartTime] = useRecoilState(startTimeToSlotAtom)
    const [endTime, setEndTime] = useRecoilState(endTimeToSlotAtom)
    const [breakEndTime, setBreakendTime] = useRecoilState(breakEndTimeToSlotAtom)
    const [breakStartTime, setBreakStartTime] = useRecoilState(breakstartTimeToSlotAtom)
    const [duration, setDuration] = useRecoilState(slotDurationAtom)

    
    const handleAlreadySlotedDate = (date : string) => {
        

        
        SetAlreadySlotedDate(date)
    }

    const setToggleAdd = () => {
        setIsToggle(c => !c)
    }

    
    const handleSubmit = async (e: any) => {
            
        e.preventDefault()


        await updatedSlot()

    }   


    
    const dayWiseSlots = ({day} : {day : string}) : SlotResponseType[] =>  { 
        return slots?.filter((slot) => isSameDay(slot.startTime, day) ) as SlotResponseType[]
  
    }

    const handleSLotDelete = (id : string) => {
        if (selectedSLotToDelete) {
            deleteSlotByIdFn(id)
        }
        toggleDeleteCOnfirmation()
    }

    const toggleDeleteCOnfirmation = () => {
        setDeleteToggle(c => !c)
    }


    const reloadSlots = () => {
        reloadSlotsForDoctor()
    }



    let slotsForTheDay : SlotResponseType[] = []    
   
    if (alreadySlotedDate != null) {
        slotsForTheDay = dayWiseSlots({day : alreadySlotedDate})  
    }

    useEffect(() => {
     
    },[])

    
    return <div className="bg-[#DAEAF5] rounded-md w-full p-4 relative mt-2 min-h-svh">

        <div className="max-w-7xl container mx-auto grid grid-cols-2 gap-2">
            <div className="col-span-1 w-full">
                    <div className=" font-semibold text-xl">
                        Create slots
                    </div>

                    <div className="">
                        <p className="underline">Choose dates/date on the white colored dates and then, start time, end time, break time and duration</p>
                    </div>

                    <div className="font-normal text-base">
                        <div>
                            <MultipleDateSelector setTimeToggle={() => {
                                setIsToggle((c) => !c)
                            }}  onSelectAlreadySlotedDay={(date : string) => handleAlreadySlotedDate(date)}/>
                        </div>
                    </div>
            </div>
            <div className="col-span-1">
                <div className="py-2 justify-between flex p-4">
                                    {alreadySlotedDate ? (
                                        <p className="text-lg font-semibold">Slots for {formatDate(alreadySlotedDate, "dd MMMM yyyy")} </p>

                                    ) : (
                                        <p className="text-lg font-semibold">Select a date</p>
                                    )}
                                    <button onClick={reloadSlots} className="bg-blue-500 text-xs text-white p-2 rounded-md">Reload</button>
                                </div>
                                <div >
                                    {slotsForTheDay.length === 0 ? (
                                        <div>No slots for this day</div>
                                    ) : (
                                        <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-2 mt-4">
                                            {slotsForTheDay.map((slot) => (
                                                <SingleSlot 
                                                key={String(slot.startTime)} 
                                                slot={slot} 
                                                onClick={() => {
                                                    setSelectedSLotToDelete(slot)
                                                    toggleDeleteCOnfirmation()
                                                }}
                                                />
                                            ))}
                                        </div>
                                    )}
                                
                </div>
            </div>
        </div>


        <div>
                    <div className={`absolute top-0 bg-opacity-65 left-0 z-50 w-screen h-screen bg-slate-300 ${!isToggle ? "hidden" : ""} flex justify-center p-4`}>
                            <div className="bg-opacity-85 rounded-2xl bg-white w-80 h-fit">
                                <div className="w-full justify-between items-end flex p-2 text-black">
                                    <div className="font-bold text-lg">
                                        <p>Choose Time</p>
                                    </div>
                                    <div className="justify-between">
                                        <button onClick={setToggleAdd} className="bg-red-500 hover:bg-red-700 text-white p-1 rounded-xl font-medium text-sm">Close</button>
                                    </div>
                                </div>
                                <div className="w-full mx-auto container p-2">
                                    <div className="py-4">
                                        <p className="font-semibold text-sm px-1">Start time</p>
                                        <TimeSelector defaultValue={startTime} placeholder="Start Time" onTimeChange={(startTime : number) => {
                                            
                                            setStartTime(startTime)
                                        }} />
                                    </div>
                                    <div className="py-4">
                                        <p className="font-semibold text-sm px-1">End time</p>
                                        <TimeSelector defaultValue={endTime} placeholder="End Time" onTimeChange={(endTime : number) => {
                                            
                                            setEndTime(endTime)
                                        }}/>
                                    </div>
                                    <div className="py-4">
                                        <p className="font-semibold text-sm px-1">Break Start time</p>
                                        <TimeSelector defaultValue={breakStartTime} placeholder="Break start Time" onTimeChange={(breakStartTime : number) => {
                                            
                                            setBreakStartTime(breakStartTime)
                                        }}/>
                                    </div>
                                    <div className="py-4">                                        
                                        <p className="font-semibold text-sm px-1">Break End time</p>
                                        <TimeSelector defaultValue={breakEndTime} placeholder="Break end Time" onTimeChange={(breakEndTime : number) => {
                                            
                                            setBreakendTime(breakEndTime)
                                        }}/>
                                    </div>

                                    <div className="py-4">                                        
                                        <p className="font-semibold text-sm px-1">Duration</p>
                                        <DurationSelector defaultValue={duration} placeholder="Duration" onDurationChange={(duration : number) => {
                                            
                                            setDuration(duration)
                                            
                                        }}/>
                                    </div>

                                    <div className="py-4 px-8">                                        
                                        <button onClick={handleSubmit} className="bg-green-700 py-1 w-full text-white text-base font-medium rounded-xl">Submit</button>
                                    </div>
                                    
                                </div>

                               
                            
                            </div>
                
                    </div>
        </div>


        <div>
            <div className={`absolute top-0 bg-opacity-65 left-0 z-50 w-screen h-screen bg-slate-300 ${!deleteToggle ? "hidden" : ""} flex justify-center p-4`}>
                    <div className="bg-opacity-85 rounded-2xl bg-slate-600 w-80 h-96 items-center justify-center flex">
                        <div>
                            <div className="w-full justify-between items-end flex p-2 text-white">
                                <div className="font-bold text-lg">
                                    <p>Delete Slot</p>
                                </div>
                                <div className="justify-between">
                                    <button onClick={toggleDeleteCOnfirmation} className="bg-red-500 hover:bg-red-700 text-white p-1 rounded-xl font-medium text-sm">Close</button>
                                </div>
                            </div>
                            <div className="w-full justify-center items-center flex p-2 text-white">
                                <div>
                                    <p>Are You want to delete</p>
                                    <p>The slot on {format(selectedSLotToDelete?.startTime ?? new Date(), "dd MMMM yyy")}</p>
                                    <p>{format(selectedSLotToDelete?.startTime ?? new Date(), "hh:mm:a")} to {format(selectedSLotToDelete?.endTime ?? new Date(), "hh:mm:a")}</p>
                                </div>
                            </div>

                            <div className="w-full justify-between items-center flex p-2 text-white gap-1">
                                <button onClick={toggleDeleteCOnfirmation} className="p-4 bg-red-400">Cancel</button>
                                <button onClick={() => {
                                    handleSLotDelete(selectedSLotToDelete?.id ?? "")
                                    
                                    }} className="p-4 bg-green-400">Confirm</button>
                            </div>
                        </div>
                    </div>
        
            </div>
        </div>
</div>
}


