import { useEffect, useState } from "react";
import { MultipleDateSelector } from "../Common/Date.Picker";
import { TimeSelector } from "../Common/Time.Selector";
import { SlotsCreateInput } from "../../types/zod.types";
import { DurationSelector } from "../Common/Duration.selector";
import { createSlots } from "../../apis/doctor/doctorSlotApis";

export const SlotsComponent = () => {

    const [postInputs, setPostInputs] = useState<SlotsCreateInput>({
        selectedDates : [],
        startTime : 9,
        endTime : 17,
        breakEndTime : 13,
        breakStartTime : 12,
        duration : 15
    })


   

    const [isToggle, setIsToggle] = useState<boolean>(true)
    const setToggleAdd = () => {
        setIsToggle(c => !c)
    }

    useEffect(() => {

    },[postInputs])


    const getSelectedDates = (dates : string[]) => {
        setPostInputs(c => ({
            ...c,
            selectedDates : dates
        }))
    }

    const handleSubmit = async (e: any) => {
            
        e.preventDefault()

        // converting dates to isoString to consistent in backend and frontend
        setPostInputs(c => ({
            ...c,
            selectedDates : postInputs.selectedDates.map(c => (new Date(c).toISOString()))
        }))
        await createSlots(postInputs)


        
        //alert(createdloc.message)
        
    }   
    
    return <div className="bg-[#DAEAF5] rounded-md w-full p-4 relative mt-2 min-h-svh">

        <div className="max-w-3xl container mx-auto">
            <div className="p-2 font-semibold text-xl">
                Create slots
            </div>

            <div className="p-2">
                <p className="underline">Choose dates</p>
            </div>

            <div className="p-2 font-normal text-base h-[600px]">
                <div>
                    <MultipleDateSelector setTimeToggle={() => {
                        setIsToggle((c) => !c)
                    }} onSubmit={getSelectedDates}/>
                </div>
            </div>
            <div>
                    <div className={`absolute top-0 bg-opacity-65 left-0 z-50 w-screen h-screen bg-slate-300 ${isToggle ? "hidden" : ""} flex justify-center p-4`}>
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
                                        <TimeSelector defaultValue={postInputs.startTime} placeholder="Start Time" onTimeChange={(startTime : number) => {
                                            setPostInputs(c => ({
                                                ...c, 
                                                startTime
                                            }))
                                        }} />
                                    </div>
                                    <div className="py-4">
                                        <p className="font-semibold text-sm px-1">End time</p>
                                        <TimeSelector defaultValue={postInputs.endTime} placeholder="End Time" onTimeChange={(endTime : number) => {
                                            setPostInputs(c => ({
                                                ...c, 
                                                endTime
                                            }))
                                        }}/>
                                    </div>
                                    <div className="py-4">
                                        <p className="font-semibold text-sm px-1">Break Start time</p>
                                        <TimeSelector defaultValue={postInputs.breakStartTime} placeholder="Break start Time" onTimeChange={(breakStartTime : number) => {
                                            setPostInputs(c => ({
                                                ...c, 
                                                breakStartTime
                                            }))
                                        }}/>
                                    </div>
                                    <div className="py-4">                                        
                                        <p className="font-semibold text-sm px-1">Break End time</p>
                                        <TimeSelector defaultValue={postInputs.breakEndTime} placeholder="Break end Time" onTimeChange={(breakEndTime : number) => {
                                            setPostInputs(c => ({
                                                ...c, 
                                                breakEndTime
                                            }))
                                        }}/>
                                    </div>

                                    <div className="py-4">                                        
                                        <p className="font-semibold text-sm px-1">Duration</p>
                                        <DurationSelector defaultValue={postInputs.duration} placeholder="Duration" onDurationChange={(duration : number) => {
                                            setPostInputs(c => ({
                                                ...c, 
                                                duration
                                            }))
                                        }}/>
                                    </div>

                                    <div className="py-4 px-8">                                        
                                        <button onClick={handleSubmit} className="bg-green-700 py-1 w-full text-white text-base font-medium rounded-xl">Submit</button>
                                    </div>
                                    
                                </div>

                               
                            
                            </div>
                
                    </div>
            </div>
        </div>
</div>
}


