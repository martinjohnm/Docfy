import { addMonths, eachDayOfInterval, endOfMonth, format, isBefore, isSameDay, startOfDay, startOfMonth, subMonths } from "date-fns"
import { weekdays, weekMap } from "../../utils/dateTimeHelpers"
import { useState } from "react"
import { SlotResponseType } from "../../types/response.types"
import { useRecoilValue } from "recoil"
import { slotsByDoctorForUserAtom } from "../../store/atoms/user/slotsByDoctorForUserAtom"






export const DatePickerUser = ({onSelectedDateChANGE} : {onSelectedDateChANGE : any}) => {

    const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())

    const slotsByDoctor = useRecoilValue(slotsByDoctorForUserAtom)

    // Generate dates for current Month 
    const daysInMonth = eachDayOfInterval({
        start : startOfMonth(currentMonth),
        end : endOfMonth(currentMonth)
    })

    // Create some Blank divs for filling the start of the month in UI
    const divs: {id : number}[] = [];
    for (let i = 0; i < Number(weekMap.get(format(startOfMonth(currentMonth), "EE"))); i++) {
        divs.push({id : i});
    }

    // Change month
    const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

    // Select day Function

    const selectDay = ({date} : {date : Date}) => {
        setSelectedDate(date)
        onSelectedDateChANGE(date)
    }

    const dayWiseSlots = ({day} : {day : Date}) : SlotResponseType[] =>  { 
        return slotsByDoctor?.filter((slot) => isSameDay(slot.startTime, day) ) as SlotResponseType[]
    
    }



    return (
        <div className="">
            <div className="flex justify-between items-center mb-4">
                <button
                    className={`p-2 bg-blue-400 rounded hover:bg-blue-500 ${currentMonth <= new Date() ? "pointer-events-none cursor-not-allowed bg-gray-400" : ""}`}
                    onClick={goToPreviousMonth}
                    >
                    Previous
                </button>
                    <h2 className="text-xl font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
                <button
                    className={`p-2 bg-blue-400 rounded hover:bg-blue-500`}
                    onClick={goToNextMonth}
                >
                    Next
                </button>
            </div>

            <div className="grid grid-cols-7 gap-2">
            {weekdays.map((weekday) => (
                <div key={weekday} className="py-2 rounded-lg text-center">
                {weekday}
                </div>
            ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
                 {/* Blank divs */}
                {divs.map((div) => (
                    <div key={div.id}/>
                ))}
                
                {daysInMonth.map((date) => (
                    isBefore(startOfDay(date), startOfDay(new Date())) ? (
                        <div className={`py-2 rounded-lg text-center relative bg-gray-300`}>
                          <div
                            key={date.toISOString()}
                            className="relative"
                          >
                            <div
                              className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-black rotate-12 -translate-x-1/2 -translate-y-1/2"
                            >
                            </div>
                            {format(date, "d")}
                          </div>
                        </div>
                    ) 
                      : (
                        dayWiseSlots({day : date})?.length === 0 ? (<button
                            key={date.toISOString()}
                            className={`py-2 rounded-lg text-center bg-slate-700" ${isSameDay(date, selectedDate) ? "bg-blue-500" : "bg-gray-100"} text-gray-800 hover:bg-blue-300`}
                            onClick={() => {
                                selectDay({date})
                                }}
                          >
                            {format(date, "d")}
                          </button>) : (
                            <button key={date.toISOString()} className={`py-2 rounded-lg text-center border border-black hover:bg-blue-300 cursor-pointer ${isSameDay(date, selectedDate) ? "bg-blue-500" : "bg-green-400"}`}
                            onClick={() => {
                                selectDay({date})
                                }}>
                                <div key={date.toISOString()}>
                                    {format(date, "d")}
                                </div>
                            </button>)
                      )
                    
                ))}
            </div>
        </div>
    )
}