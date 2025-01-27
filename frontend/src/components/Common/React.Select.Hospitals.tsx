import Select from 'react-select'
import { useEffect, useState } from 'react';
import { useGetHospitalsDoctor } from '../../hooks/doctor/useGetHospitalsDoctor';

type OptionType = {
  value: string;
  label: string;
};




export const ReactSelectHospitals = ({onHospitalChange, hostpitalId} : {onHospitalChange : any, hostpitalId? : string}) => {

    

    const [selectedOption, setSelectedOption] = useState<OptionType | null>()
    
    const hospitals = useGetHospitalsDoctor()
    
    let hospitalOptions = hospitals.hospitals?.map(hospital => ({value : hospital.id, label : hospital.name}))


    const selectedValue = hospitalOptions?.find((hos) => (hos.value === hostpitalId))

    const handleChange = (option : any) => {
      setSelectedOption(option);
      {option ? onHospitalChange(option.value) : null}
    };

    useEffect(() => {

    }, [selectedOption])


    return <div className=''> <label className="block mb-2 text-sm font-medium text-black">Hospital</label>
      {selectedValue ? (
         <Select required value={selectedValue} className='border border-gray-300 text-black outline-none text-sm rounded-lg' placeholder="Hospital" options={hospitalOptions} onChange={handleChange} />

      ) : (
        <Select required className='border border-gray-300 text-black outline-none text-sm rounded-lg' placeholder="Hospital" options={hospitalOptions} onChange={handleChange} />
      )}
</div> 
}