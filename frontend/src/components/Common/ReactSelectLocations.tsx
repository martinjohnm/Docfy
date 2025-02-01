


import Select from 'react-select'
import { useEffect, useState } from 'react';
import { useGetlocations } from '../../hooks/admin/useGetLocations';

type OptionType = {
  value: string;
  label: string;
};


export const ReactSelectLocations = ({onLocationChange, defaultValue} : {onLocationChange : any, defaultValue? : string}) => {

    
    
    const [selectedOption, setSelectedOption] = useState<OptionType | null>()
    const locations = useGetlocations()
    let locationOptions = locations.locations?.map(category => ({value : category.id, label : category.city}))

    const defautlValToReactselect = locationOptions?.find(value => value.value === defaultValue)

    const handleChange = (option : any) => {
      setSelectedOption(option);
      {option ? onLocationChange(option.value) : null}
    };

    useEffect(() => {


    }, [selectedOption])


    return <div className='w-full h-full'>     <label className="block mb-2 text-sm font-medium text-black">Location</label>
       <Select required className='border border-gray-300 text-black outline-none text-sm rounded-lg' placeholder="Location"  options={locationOptions} onChange={handleChange} value={defautlValToReactselect} />
</div> 
}