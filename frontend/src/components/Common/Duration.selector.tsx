import { useState } from "react";
import Select from "react-select"
type OptionType = {
    value: string;
    label: string;
  };


export const DurationSelector = ({placeholder, onDurationChange, defaultValue} : {placeholder : string, onDurationChange : any, defaultValue : number}) => {

    const [_selectedOption, setSelectedOption] = useState<OptionType | null>()
    

    let options = [
    {
        value : 15,
        label : "15 Min"
    },
    {
        value : 20, 
        label : "20 Min"
    }, 
    {
        value : 30,
        label : "30 Min"
    }]

    const handleChange = (option : any) => {
        setSelectedOption(option);
        {option ? onDurationChange(option.value) : null}
      };
    
    return <div>
        <Select required className='border border-gray-300 text-black outline-none text-sm rounded-lg' placeholder={placeholder}  options={options} onChange={handleChange} value={options.find(value => value.value === defaultValue)} />
    </div>
}