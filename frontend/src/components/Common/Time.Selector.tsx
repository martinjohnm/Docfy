import { useState } from "react";
import Select from "react-select"
import { timeOptions } from "../../utils/dateTimeHelpers";

type OptionType = {
    value: string;
    label: string;
  };

export const TimeSelector = ({placeholder, onTimeChange, defaultValue} : {placeholder : string, onTimeChange : any, defaultValue : number}) => {

    const [_selectedOption, setSelectedOption] = useState<OptionType | null>()


    let timeOptionss = timeOptions.map((option) => ({value : option.value, label : option.label}))

    const handleChange = (option : any) => {
        setSelectedOption(option);
        {option ? onTimeChange(option.value) : null}
      };
    
    return <div>
        <Select required className='border border-gray-300 text-black outline-none text-sm rounded-lg' placeholder={placeholder} options={timeOptionss} onChange={handleChange} value={timeOptions.find(value => value.value === defaultValue)} />
    </div>
}