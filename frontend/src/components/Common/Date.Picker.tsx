import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths } from "date-fns";
import { weekdays, weekMap } from "../../utils/dateTimeHelpers";
import { useRecoilValue } from "recoil";
import { slotsByDoctorAtom } from "../../store/atoms/doctor/slotsByDoctorAtom";
import { useGetSlotsDoctor } from "../../hooks/doctor/useGetSlotsDoctor";
import { SlotResponseType } from "../../types/response.types";



export const MultipleDateSelector = ({onSubmit, setTimeToggle} : {onSubmit : any, setTimeToggle:any}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  useGetSlotsDoctor()

  const slots = useRecoilValue(slotsByDoctorAtom)


  // console.log(slots?.length);
  // const sameMonthSlot = slots?.filter((slot) => isSameMonth(slot.startTime, currentMonth)
  // )

  const dayWiseSlots = ({day} : {day : Date}) : SlotResponseType[] =>  { 
    return slots?.filter((slot) => isSameDay(slot.startTime, day) ) as SlotResponseType[]

}


  // Generate dates for the current month
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const divs: JSX.Element[] = [];

  for (let i = 0; i < Number(weekMap.get(format(startOfMonth(currentMonth), "EE"))); i++) {
    divs.push(<div key={i}></div>);
  }

  const [isToggle, setIsToggle] = useState<boolean>(true)
  const setToggleAdd = () => {
      setIsToggle(c => !c)
  }
  
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
    <div className="max-w-lg">
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
        {divs.map((div) => (
          div
        ))}
        {/* Date divs */}
        {daysInMonth.map((date) => (
 
            date <= new Date() ? (
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
                onClick={() => toggleDate(date)}
              >
                {format(date, "d")}
              </button>) : (
                <button
                className={`py-2 rounded-lg text-center bg-slate-700 text-white`}
                onClick={setToggleAdd}
                >
                  {format(date, "d")}
                </button>
              )
              
            )
            


        ))}
      </div>
 
      <div className="mt-4 grid gap-2 grid-cols-2 max-w-[60%]">
        <button onClick={() => {
          onSubmit(selectedDates)
          setTimeToggle()
        }} className="bg-green-600 text-white px-4 py-2 rounded-md">Submit</button>
        <button onClick={() => setSelectedDates([])} className="bg-red-500 text-white px-4 py-2 rounded-md">Cancel</button>
      </div>

      <div>
          {/* Daywise slot view */}
              <div className={`absolute top-0 bg-opacity-65 left-0 z-50 w-screen h-screen bg-slate-300 ${isToggle ? "hidden" : ""} flex justify-center p-4`}>
                      <div className="bg-opacity-85 rounded-2xl bg-white w-80 h-fit">
                          <div className="w-full justify-between items-end flex p-2 text-black">
                              <div className="font-bold text-lg">
                                  <p>Slots</p>
                              </div>
                              <div className="justify-between">
                                  <button onClick={setToggleAdd} className="bg-red-500 hover:bg-red-700 text-white p-1 rounded-xl font-medium text-sm">Close</button>
                              </div>
                          </div>
                          <div className="w-full mx-auto container p-2">
                            
                              
                          </div>

                      </div>
              </div>
      </div>
    </div>
  );
};

