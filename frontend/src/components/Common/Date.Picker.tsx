import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths, isFuture } from "date-fns";
import { weekdays, weekMap } from "../../utils/dateTimeHelpers";
import { useRecoilValue } from "recoil";
import { slotsByDoctorAtom } from "../../store/atoms/doctor/slotsByDoctorAtom";
import { useGetSlotsDoctor } from "../../hooks/doctor/useGetSlotsDoctor";
import { SlotResponseType } from "../../types/response.types";



export const MultipleDateSelector = ({onSubmit, setTimeToggle, onSelectAlreadySlotedDay} : {onSubmit : any, setTimeToggle:any, onSelectAlreadySlotedDay : any, alreadySlotedDate : Date | null}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);  


  console.log(selectedDates.length);
  
  useGetSlotsDoctor()


  const slots = useRecoilValue(slotsByDoctorAtom)

  const dayWiseSlots = ({day} : {day : Date}) : SlotResponseType[] =>  { 
      return slots?.filter((slot) => isSameDay(slot.startTime, day) ) as SlotResponseType[]

  }



  // Generate dates for the current month
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });


  
  // Toggle date selection
  const toggleDate = (date: Date) => {
    setSelectedDates((prev) =>
      prev.some((d) => isSameDay(d, date))
        ? prev.filter((d) => !isSameDay(d, date)) // Remove date
        : [...prev, date] // Add date
    );
  };

  

  // Check if a date is selected
  const isSelected = (date: Date) =>
    selectedDates.some((d) => isSameDay(d, date));

  // Change month
  const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <div className="">
    
      <div>
                  <div className="flex justify-between items-center mb-4">
                        <button
                          className={`p-2 bg-blue-400 rounded hover:bg-blue-500 ${currentMonth <= new Date()? "pointer-events-none cursor-not-allowed bg-gray-400" : ""}`}
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
                    {Array.from({ length: Number(weekMap.get(format(startOfMonth(currentMonth), "EE"))) }, (_, index) => (
                                          <div key={index}/>
                    ))}
                    {/* Date divs */}
                    {daysInMonth.map((date) => (
            
                        (!isFuture(date) && !isSameDay(date , new Date())) ? (
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
                        ) : (
                          dayWiseSlots({day : date})?.length === 0 ? (<button
                            key={date.toISOString()}
                            className={`py-2 rounded-lg text-center bg-slate-700" ${
                              isSelected(date)
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-800"
                            } hover:bg-blue-200 transition`}
                            onClick={() => {
                              toggleDate(date)
                              
                            }}
                          >
                            {format(date, "d")}
                          </button>) : (
                            <button
                            className={`py-2 rounded-lg text-center bg-slate-700 text-white`}
                            onClick={() => {onSelectAlreadySlotedDay(date)}}
                            >
                              {format(date, "d")}
                            </button>
                          )
                          
                        )
                        


                    ))}
                  </div>
            
                  <div className={`mt-4 grid gap-2 grid-cols-2 max-w-[60%]}`}>
                    <button onClick={() => {
                      onSubmit(selectedDates)
                      setTimeToggle()
                    }} className="bg-green-600 text-white px-4 py-2 rounded-md">Submit</button>
                    <button onClick={() => setSelectedDates([])} className="bg-red-500 text-white px-4 py-2 rounded-md">Cancel</button>
                  </div>

      </div>
      
      
    </div>
    
  );
};

