


import Select from 'react-select'
import { useEffect, useState } from 'react';
import { useGetlocations } from '../../hooks/admin/useGetLocations';

type OptionType = {
  value: string;
  label: string;
};


export const ReactSelectLocations = ({onCategoryChange, defaultValue} : {onCategoryChange : any, defaultValue? : string}) => {

    
    
    const [selectedOption, setSelectedOption] = useState<OptionType | null>()
    const locations = useGetlocations()
    let categoryOptions = locations.locations?.map(category => ({value : category.id, label : category.city}))

    const defautlValToReactselect = categoryOptions?.find(value => value.value === defaultValue)

    const handleChange = (option : any) => {
      setSelectedOption(option);
      {option ? onCategoryChange(option.value) : null}
    };

    useEffect(() => {


    }, [selectedOption])


    return <div className='w-full h-full'>     <label className="block mb-2 text-sm font-medium text-black">Location</label>
       <Select required className='border border-gray-300 text-black outline-none text-sm rounded-lg' placeholder="Location"  options={categoryOptions} onChange={handleChange} value={defautlValToReactselect} />
</div> 
}