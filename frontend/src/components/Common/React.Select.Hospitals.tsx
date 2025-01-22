import Select from 'react-select'
import { useGetlocations } from '../../hooks/admin/useGetLocations';
import { useEffect, useState } from 'react';

type OptionType = {
  value: string;
  label: string;
};




export const ReactSelectHospitals = ({onLocationChange} : {onLocationChange : any}) => {

    const [selectedOption, setSelectedOption] = useState<OptionType | null>()
    const locations = useGetlocations()
    let locationOptions = locations.locations?.map(loccation => ({value : loccation.id, label : loccation.city}))


    const handleChange = (option : any) => {
      setSelectedOption(option);
      {option ? onLocationChange(option.value) : null}
    };

    useEffect(() => {


    }, [selectedOption])


    return <div className='w-full h-full'>     <label className="block mb-2 text-sm font-medium text-black">Location</label>
       <Select required className='border border-gray-300 text-black outline-none text-sm rounded-lg' placeholder="Location" options={locationOptions} onChange={handleChange} />
</div> 
}